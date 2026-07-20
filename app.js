/* TrustCorp hub — premium layout + auth-gated services */
const PRODUCTS = [
  { id:"procontador", tk:"PCT", name:"ProContador", pil:"empresas", label:"Empresas",
    desc:"Contabilidade operacional premium para multiempresa, fiscal e relatórios.",
    url:"https://www.procontador.com.br", domain:"procontador.com.br", status:"ativo" },
  { id:"crm", tk:"CRM", name:"Trust CRM", pil:"empresas", label:"Empresas",
    desc:"Pipeline, leads e follow-up comercial sob controle.",
    url:"https://crm.trustcorp.com.br", domain:"crm.trustcorp.com.br", status:"ativo" },
  { id:"legal", tk:"LGL", name:"Trust Legal", pil:"empresas", label:"Empresas",
    desc:"Contratos, prazos e rotina jurídica digital.",
    url:"https://legal.trustcorp.com.br", domain:"legal.trustcorp.com.br", status:"ativo" },
  { id:"fin", tk:"FIN", name:"Trust Fin", pil:"empresas", label:"Empresas",
    desc:"Fluxo de caixa, cobrança e indicadores financeiros.",
    url:"https://fin.trustcorp.com.br", domain:"fin.trustcorp.com.br", status:"ativo" },
  { id:"cnpj", tk:"CNP", name:"Trust CNPJ", pil:"empresas", label:"Empresas",
    desc:"Consulta completa CNPJ e CPF com dados cadastrais, societários e fiscais.",
    url:"https://cnpj.trustcorp.com.br", domain:"cnpj.trustcorp.com.br", status:"ativo", also:["intel"] },
  { id:"excel", tk:"XLS", name:"Trust Excel", pil:"prod", label:"Produtividade",
    desc:"Automação de planilhas e relatórios sem fricção.",
    url:"https://excel.trustcorp.com.br", domain:"excel.trustcorp.com.br", status:"ativo", also:["empresas"] },
  { id:"watson", tk:"WTS", name:"Trust Watson", pil:"intel", label:"Inteligência",
    desc:"Assistente de IA para análise e automação cognitiva.",
    url:"https://watson.trustcorp.com.br", domain:"watson.trustcorp.com.br", status:"ativo" },
  { id:"mrholmes", tk:"HLM", name:"Mr. Holmes", pil:"intel", label:"Inteligência",
    desc:"Inteligência investigativa e cruzamento de sinais.",
    url:"https://mrholmes.trustcorp.com.br", domain:"mrholmes.trustcorp.com.br", status:"ativo" },
  { id:"oraculo", tk:"ORC", name:"Trust Oráculo", pil:"intel", label:"Inteligência",
    desc:"Projeções, alertas e cenários para decidir antes.",
    url:"https://oraculo.trustcorp.com.br", domain:"oraculo.trustcorp.com.br", status:"ativo" },
  { id:"investigatop", tk:"INV", name:"InvestigaTop", pil:"intel", label:"Inteligência",
    desc:"Investigação patrimonial, due diligence e recuperação de ativos.",
    url:"https://investigatop.com.br", domain:"investigatop.com.br", status:"ativo" },
  { id:"futurefish", tk:"FSH", name:"Future Fish", pil:"intel", label:"Inteligência",
    desc:"Cenários de previsão exclusivos com acesso controlado.",
    url:"https://future.seligaaqui.online", domain:"future.seligaaqui.online", status:"ativo" },
  { id:"socialflow", tk:"SFL", name:"Social Flow", pil:"mktg", label:"Marketing",
    desc:"18 agentes de IA, Creator Studio, Instagram, WhatsApp e loja.",
    url:"https://www.socialflow.site", domain:"socialflow.site", status:"ativo" },
  { id:"insta", tk:"INS", name:"Trust Insta", pil:"mktg", label:"Marketing",
    desc:"Operação social e rotina de Instagram com foco em resultado.",
    url:"https://insta.trustcorp.com.br", domain:"insta.trustcorp.com.br", status:"ativo" },
  { id:"cortexpdf", tk:"PDF", name:"Cortex PDF", pil:"prod", label:"Produtividade",
    desc:"PDF, OCR, tradução e conversão com IA.",
    url:"https://www.cortexpdf.online", domain:"cortexpdf.online", status:"ativo" },
  { id:"vooscortex", tk:"VOO", name:"Voos Cortex", pil:"life", label:"Lifestyle",
    desc:"Compare passagens e acompanhe alertas de preço.",
    url:"https://vooscortex.com.br", domain:"vooscortex.com.br", status:"ativo" },
  { id:"seligaaqui", tk:"SEL", name:"SeligaAqui", pil:"life", label:"Lifestyle",
    desc:"TV, esportes e música em um só painel.",
    url:"https://seligaaqui.online", domain:"seligaaqui.online", status:"ativo" },
  { id:"gpsprivado", tk:"GPS", name:"GPS Privado", pil:"life", label:"Lifestyle",
    desc:"Produto em preparação no ecossistema TrustCorp.",
    url:"https://gpsprivado.online", domain:"gpsprivado.online", status:"em_breve" },
];

const CONTACT = {
  email: "flavio@trustcorp.com.br",
  whatsapp: "5514998370223",
  whatsappDisplay: "@frinaldi.co",
};

const AUTH = { authenticated: false, role: null, loaded: false };

function canAccessServices() {
  return AUTH.authenticated && (AUTH.role === "admin" || AUTH.role === "client");
}
function roleLabel(role) {
  if (role === "admin") return "Administrador";
  if (role === "client") return "Cliente";
  return "Visitante";
}

async function fetchSession() {
  try {
    const res = await fetch("/api/session", { credentials: "same-origin" });
    const data = await res.json();
    AUTH.authenticated = Boolean(data.authenticated);
    AUTH.role = data.role || null;
  } catch {
    AUTH.authenticated = false;
    AUTH.role = null;
  } finally {
    AUTH.loaded = true;
  }
}

async function loginWithPassword(password) {
  const res = await fetch("/api/login", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) throw new Error(data.error || "Senha inválida");
  AUTH.authenticated = true;
  AUTH.role = data.role;
  AUTH.loaded = true;
  return data;
}

async function logoutSession() {
  try {
    await fetch("/api/logout", { method: "POST", credentials: "same-origin" });
  } catch {}
  AUTH.authenticated = false;
  AUTH.role = null;
  AUTH.loaded = true;
}

function ensureLoginModal() {
  if (document.getElementById("login-modal")) return;
  const el = document.createElement("div");
  el.id = "login-modal";
  el.className = "login-modal";
  el.innerHTML = `
    <div class="login-backdrop" data-close-login></div>
    <div class="login-card" role="dialog" aria-modal="true">
      <button class="login-close" type="button" data-close-login aria-label="Fechar">×</button>
      <p class="kicker">Acesso restrito</p>
      <h3>Entrar na TrustCorp</h3>
      <p id="login-message">Digite a senha de administrador ou de cliente para liberar os serviços.</p>
      <form id="login-form" class="login-form">
        <label for="login-password">Senha</label>
        <input id="login-password" type="password" required autocomplete="current-password" placeholder="Senha de acesso" />
        <p id="login-error" class="login-error" aria-live="polite"></p>
        <button class="btn-sm primary" type="submit">Liberar serviços</button>
      </form>
    </div>`;
  document.body.appendChild(el);
  el.querySelectorAll("[data-close-login]").forEach((n) => n.addEventListener("click", closeLoginModal));
  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const err = document.getElementById("login-error");
    err.textContent = "";
    try {
      const data = await loginWithPassword(document.getElementById("login-password").value || "");
      closeLoginModal();
      refreshAuthUI();
      alert(data.message || "Acesso liberado");
    } catch (error) {
      err.textContent = error.message || "Senha inválida";
    }
  });
}
function openLoginModal(msg) {
  ensureLoginModal();
  const modal = document.getElementById("login-modal");
  const message = document.getElementById("login-message");
  if (message && msg) message.textContent = msg;
  document.getElementById("login-error").textContent = "";
  modal.classList.add("open");
  const input = document.getElementById("login-password");
  input.value = "";
  setTimeout(() => input.focus(), 30);
}
function closeLoginModal() {
  document.getElementById("login-modal")?.classList.remove("open");
}

function updateAuthBanner() {
  // Banner separado removido: cobria o logo. Status fica só na navbar.
  const banner = document.getElementById("auth-banner");
  if (banner) {
    banner.hidden = true;
    banner.innerHTML = "";
  }
  document.body.classList.remove("has-auth-banner");
}

function updateNavAuth() {
  const btn = document.getElementById("navLoginBtn");
  if (!btn) return;
  if (canAccessServices()) {
    btn.textContent = `Sair · ${roleLabel(AUTH.role)}`;
    btn.title = "Serviços liberados";
    btn.onclick = async () => {
      await logoutSession();
      refreshAuthUI();
    };
  } else {
    btn.textContent = "Entrar";
    btn.title = "Site aberto · serviços bloqueados";
    btn.onclick = () => openLoginModal();
  }
}

function matchesFilter(p, filter) {
  if (filter === "all") return true;
  if (p.pil === filter) return true;
  if (p.also && p.also.includes(filter)) return true;
  return false;
}

function productCard(p) {
  const soon = p.status === "em_breve";
  const locked = !canAccessServices() && !soon;
  const cta = soon ? "Em breve" : locked ? "Bloqueado" : "Acessar";
  const href = soon || locked ? "#" : p.url;
  const attrs = soon
    ? 'aria-disabled="true"'
    : locked
      ? 'data-requires-auth="true"'
      : 'target="_blank" rel="noopener noreferrer"';
  const domain = locked || soon
    ? `<div class="domain locked">${p.domain}${locked ? " · bloqueado" : ""}</div>`
    : `<div class="domain"><a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.domain}</a></div>`;

  return `
    <article class="prod ${locked ? "is-locked" : ""}" data-pil="${p.pil}">
      <div class="top"><span class="tk">${p.tk}</span><span class="pil">${p.label}</span></div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      ${domain}
      <div class="actions">
        <a class="btn-sm primary" href="${href}" ${attrs}>${cta}</a>
        <a class="btn-sm ghost" href="produto.html?id=${encodeURIComponent(p.id)}">Detalhes</a>
        <a class="btn-sm ghost" href="contato.html?produto=${encodeURIComponent(p.name)}">Demo</a>
      </div>
    </article>`;
}

function bindLocks(root = document) {
  root.querySelectorAll('[data-requires-auth="true"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openLoginModal("Para acessar este serviço, use a senha de administrador ou de cliente.");
    });
  });
}

function renderProducts(filter = "all") {
  const grid = document.getElementById("prodGrid");
  if (!grid) return;
  const list = PRODUCTS.filter((p) => matchesFilter(p, filter));
  grid.innerHTML = list.map(productCard).join("");
  bindLocks(grid);
}

function refreshAuthUI() {
  updateAuthBanner();
  updateNavAuth();
  const active = document.querySelector(".chip.active");
  renderProducts(active?.dataset?.f || "all");
}

function initLayoutExtras() {
  // accordions
  document.querySelectorAll(".acc-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const a = item.querySelector(".acc-a");
      const open = item.classList.contains("open");
      item.classList.toggle("open");
      if (a) a.style.maxHeight = open ? null : a.scrollHeight + "px";
    });
  });

  // nav shadow
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // reveal
  const io = new IntersectionObserver((es) => {
    es.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // mark example quotes
  document.querySelectorAll(".quote").forEach((q) => {
    if (q.querySelector(".ex")) return;
    const b = document.createElement("span");
    b.className = "ex";
    b.textContent = "exemplo — substituir";
    q.prepend(b);
  });

  // mobile menu
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // count-up
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const countIO = new IntersectionObserver((es) => {
    es.forEach((x) => {
      if (!x.isIntersecting) return;
      const el = x.target;
      const target = +el.dataset.count;
      countIO.unobserve(el);
      if (reduce) {
        el.textContent = target;
        return;
      }
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 28));
      const t = setInterval(() => {
        cur += step;
        if (cur >= target) {
          cur = target;
          clearInterval(t);
        }
        el.textContent = cur;
      }, 32);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".n[data-count]").forEach((el) => countIO.observe(el));

  // hero index pulse
  if (!reduce) {
    const rows = document.querySelectorAll(".index-card .index-row");
    if (rows.length) {
      let i = 0;
      setInterval(() => {
        rows.forEach((r) => (r.style.background = ""));
        rows[i].style.background = "rgba(201,156,102,.07)";
        i = (i + 1) % rows.length;
      }, 1800);
    }
  }

  // filters
  const filters = document.getElementById("filters");
  filters?.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.f || "all");
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  ensureLoginModal();
  await fetchSession();
  updateAuthBanner();
  updateNavAuth();
  initLayoutExtras();
  renderProducts("all");
});
