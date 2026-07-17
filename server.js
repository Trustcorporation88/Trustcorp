const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const SESSION_SECRET =
  process.env.SESSION_SECRET || "trustcorp-change-this-session-secret";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "TrustAdmin@2026";
const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD || "TrustClient@2026";
const SESSION_DAYS = Number(process.env.SESSION_DAYS || 7);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function parseCookies(header = "") {
  const out = {};
  header.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx === -1) return;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

function signSession(role) {
  const payload = Buffer.from(
    JSON.stringify({
      role,
      exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000,
    })
  ).toString("base64url");
  const sig = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("base64url");
  return `${payload}.${sig}`;
}

function verifySession(token) {
  if (!token || typeof token !== "string") return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!data?.role || !data?.exp || data.exp < Date.now()) return null;
    if (data.role !== "admin" && data.role !== "client") return null;
    return data;
  } catch {
    return null;
  }
}

function sendJson(res, status, data, extraHeaders = {}) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    ...extraHeaders,
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 100 * 1024) {
        reject(new Error("Body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function cookieHeader(name, value, { clear = false } = {}) {
  if (clear) {
    return `${name}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
  }
  const maxAge = SESSION_DAYS * 24 * 60 * 60;
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

function safeJoin(root, requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const cleaned = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const full = path.join(root, cleaned);
  if (!full.startsWith(root)) return null;
  return full;
}

function serveStatic(req, res, pathname) {
  let filePath = safeJoin(ROOT, pathname === "/" ? "/index.html" : pathname);
  if (!filePath) {
    res.writeHead(400);
    return res.end("Bad request");
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  // pretty paths without .html
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    const htmlPath = `${filePath}.html`;
    if (fs.existsSync(htmlPath)) filePath = htmlPath;
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Not found");
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": type });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    const cookies = parseCookies(req.headers.cookie || "");

    if (req.method === "GET" && url.pathname === "/api/session") {
      const session = verifySession(cookies.tc_session);
      return sendJson(res, 200, {
        ok: true,
        authenticated: Boolean(session),
        role: session?.role || null,
      });
    }

    if (req.method === "POST" && url.pathname === "/api/login") {
      const raw = await readBody(req);
      let body = {};
      try {
        body = JSON.parse(raw || "{}");
      } catch {
        return sendJson(res, 400, { ok: false, error: "JSON inválido" });
      }
      const password = String(body.password || "");
      let role = null;
      if (password && password === ADMIN_PASSWORD) role = "admin";
      else if (password && password === CLIENT_PASSWORD) role = "client";
      if (!role) {
        return sendJson(res, 401, { ok: false, error: "Senha inválida" });
      }
      return sendJson(
        res,
        200,
        {
          ok: true,
          authenticated: true,
          role,
          message:
            role === "admin"
              ? "Acesso administrador liberado"
              : "Acesso cliente liberado",
        },
        { "Set-Cookie": cookieHeader("tc_session", signSession(role)) }
      );
    }

    if (req.method === "POST" && url.pathname === "/api/logout") {
      return sendJson(
        res,
        200,
        { ok: true, authenticated: false, role: null },
        { "Set-Cookie": cookieHeader("tc_session", "", { clear: true }) }
      );
    }

    if (req.method === "GET" || req.method === "HEAD") {
      return serveStatic(req, res, url.pathname);
    }

    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method not allowed");
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: false, error: "Erro interno" }));
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`TrustCorp hub with auth on http://0.0.0.0:${PORT}`);
});
