/* TrustCorp Hub — catalog + UI */
const PRODUCTS = [
  {
    id: "procontador",
    name: "ProContador",
    tagline: "Contabilidade operacional premium",
    description: "Multiempresa, lançamentos, relatórios, risco fiscal e base para IA/Open Finance.",
    url: "https://www.procontador.com.br",
    domain: "procontador.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Multiempresa", "Fiscal e auditoria", "Base para IA"],
  },
  {
    id: "crm",
    name: "Trust CRM",
    tagline: "Pipeline e relacionamento",
    description: "Leads, oportunidades e follow-up comercial com visão executiva.",
    url: "https://crm.trustcorp.com.br",
    domain: "crm.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Pipeline", "Leads", "Follow-up"],
  },
  {
    id: "legal",
    name: "Trust Legal",
    tagline: "Operação jurídica digital",
    description: "Contratos, prazos e fluxos legais com rastreabilidade.",
    url: "https://legal.trustcorp.com.br",
    domain: "legal.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Contratos", "Prazos", "Rotina jurídica"],
  },
  {
    id: "fin",
    name: "Trust Fin",
    tagline: "Financeiro com indicadores",
    description: "Fluxo de caixa, cobranças e saúde financeira do negócio.",
    url: "https://fin.trustcorp.com.br",
    domain: "fin.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Fluxo de caixa", "Cobrança", "Indicadores"],
  },
  {
    id: "excel",
    name: "Trust Excel",
    tagline: "Planilhas e dados sem fricção",
    description: "Automação de planilhas e relatórios operacionais.",
    url: "https://excel.trustcorp.com.br",
    domain: "excel.trustcorp.com.br",
    pillar: "produtividade",
    status: "ativo",
    alsoIn: ["empresas"],
    delivers: ["Automação", "Relatórios", "Menos trabalho manual"],
  },
  {
    id: "watson",
    name: "Trust Watson",
    tagline: "Assistente inteligente",
    description: "IA para respostas, análise e automação cognitiva da operação.",
    url: "https://watson.trustcorp.com.br",
    domain: "watson.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Assistente IA", "Análise", "Automação"],
  },
  {
    id: "mrholmes",
    name: "Mr. Holmes",
    tagline: "Inteligência investigativa",
    description: "Padrões, cruzamentos e sinais ocultos para decisão com evidência.",
    url: "https://mrholmes.trustcorp.com.br",
    domain: "mrholmes.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Investigação", "Cruzamento", "Insights"],
  },
  {
    id: "oraculo",
    name: "Trust Oráculo",
    tagline: "Previsão e cenários",
    description: "Projeções, alertas e apoio à decisão estratégica.",
    url: "https://oraculo.trustcorp.com.br",
    domain: "oraculo.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Projeções", "Alertas", "Cenários"],
  },
  {
    id: "investigatop",
    name: "InvestigaTop",
    tagline: "Revelando ativos ocultos",
    description: "Investigação patrimonial, due diligence e recuperação de ativos.",
    url: "https://investigatop.com.br",
    domain: "investigatop.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Patrimônio", "Due diligence", "Recuperação"],
  },
  {
    id: "futurefish",
    name: "Future Fish",
    tagline: "Cenários de previsão VIP",
    description: "Acesso controlado a simulações e previsões exclusivas.",
    url: "https://future.seligaaqui.online",
    domain: "future.seligaaqui.online",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["VIP", "Cenários", "Acesso controlado"],
  },
  {
    id: "socialflow",
    name: "Social Flow",
    tagline: "Vendas, IA e automação",
    description: "18 agentes de IA, Creator Studio, Instagram, WhatsApp, loja e pagamentos.",
    url: "https://www.socialflow.site",
    domain: "socialflow.site",
    pillar: "marketing",
    status: "ativo",
    delivers: ["18 agentes IA", "Creator Studio", "Instagram + WhatsApp"],
  },
  {
    id: "insta",
    name: "Trust Insta",
    tagline: "Operação social",
    description: "Conteúdo, engajamento e rotina de Instagram na suíte Trust.",
    url: "https://insta.trustcorp.com.br",
    domain: "insta.trustcorp.com.br",
    pillar: "marketing",
    status: "ativo",
    delivers: ["Conteúdo", "Engajamento", "Rotina social"],
  },
  {
    id: "cortexpdf",
    name: "Cortex PDF",
    tagline: "PDF, OCR e conversão com IA",
    description: "Toolkit online de documentos: PDF, OCR, tradutor e conversores.",
    url: "https://www.cortexpdf.online",
    domain: "cortexpdf.online",
    pillar: "produtividade",
    status: "ativo",
    delivers: ["PDF + OCR", "Tradução", "Conversores"],
  },
  {
    id: "vooscortex",
    name: "Voos Cortex",
    tagline: "Compare passagens com clareza",
    description: "Busca de voos, filtros e alertas de preço nacionais e internacionais.",
    url: "https://vooscortex.com.br",
    domain: "vooscortex.com.br",
    pillar: "lifestyle",
    status: "ativo",
    delivers: ["Comparação", "Alertas", "Filtros"],
  },
  {
    id: "seligaaqui",
    name: "SeligaAqui",
    tagline: "TV, esportes e música",
    description: "Painel unificado de IPTV, ao vivo, esportes e rádios.",
    url: "https://seligaaqui.online",
    domain: "seligaaqui.online",
    pillar: "lifestyle",
    status: "ativo",
    delivers: ["IPTV", "Esportes", "Música"],
  },
  {
    id: "gpsprivado",
    name: "GPS Privado",
    tagline: "Localização sob demanda",
    description: "Produto em preparação no ecossistema TrustCorp.",
    url: "https://gpsprivado.online",
    domain: "gpsprivado.online",
    pillar: "lifestyle",
    status: "em_breve",
    delivers: ["Em definição", "Acesso controlado", "Lançamento"],
  },
];

const PILLARS = {
  empresas: {
    id: "empresas",
    name: "Empresas",
    title: "Operação Empresarial",
    subtitle: "Contábil, comercial, jurídico e financeiro.",
    href: "empresas.html",
  },
  inteligencia: {
    id: "inteligencia",
    name: "Inteligência",
    title: "Inteligência & Investigação",
    subtitle: "IA, previsão, due diligence e investigação.",
    href: "inteligencia.html",
  },
  marketing: {
    id: "marketing",
    name: "Marketing",
    title: "Marketing & Vendas",
    subtitle: "Agentes, criativos e automação comercial.",
    href: "marketing.html",
  },
  produtividade: {
    id: "produtividade",
    name: "Produtividade",
    title: "Produtividade & Documentos",
    subtitle: "PDF, OCR e planilhas sem fricção.",
    href: "produtividade.html",
  },
  lifestyle: {
    id: "lifestyle",
    name: "Lifestyle",
    title: "Lifestyle & Experiências",
    subtitle: "Voos, entretenimento e utilidades.",
    href: "lifestyle.html",
  },
};

const STATUS_LABEL = {
  ativo: "Ativo",
  manutencao: "Manutenção",
  em_breve: "Em breve",
};

const CONTACT = {
  email: "flavio@trustcorp.com.br",
  whatsapp: "5514998370223",
  whatsappDisplay: "@frinaldi.co",
  instagram: "frinaldi.co",
  instagramUrl: "https://instagram.com/frinaldi.co",
};

function productsForPillar(pillarId) {
  return PRODUCTS.filter(
    (p) => p.pillar === pillarId || (p.alsoIn && p.alsoIn.includes(pillarId))
  );
}

function statusBadge(status) {
  return `<span class="badge badge-${status}">${STATUS_LABEL[status] || status}</span>`;
}

function productCard(product, { compact = false } = {}) {
  const pillar = PILLARS[product.pillar];
  const isSoon = product.status === "em_breve";
  const ctaLabel = isSoon
    ? "Em breve"
    : product.status === "manutencao"
      ? "Acessar"
      : "Acessar";
  const note = product.note ? `<p class="card-note">${product.note}</p>` : "";

  return `
    <article class="product-card" data-status="${product.status}" data-pillar="${product.pillar}" id="${product.id}">
      <div class="card-top">
        <div>
          <p class="card-kicker">${pillar ? pillar.name : "TrustCorp"}</p>
          <h3>${product.name}</h3>
        </div>
        ${statusBadge(product.status)}
      </div>
      <p class="card-tagline">${product.tagline}</p>
      ${compact ? "" : `<p class="card-desc">${product.description}</p>`}
      ${
        compact
          ? ""
          : `<ul class="card-list">${product.delivers
              .map((item) => `<li>${item}</li>`)
              .join("")}</ul>`
      }
      <p class="card-domain"><a href="${product.url}" target="_blank" rel="noopener noreferrer">${product.domain}</a></p>
      ${note}
      <div class="card-actions">
        <a class="btn btn-primary ${isSoon ? "is-disabled" : ""}"
           href="${isSoon ? "#" : product.url}"
           ${isSoon ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
          ${ctaLabel}
        </a>
        <a class="btn btn-ghost" href="contato.html?produto=${encodeURIComponent(product.name)}">Demo</a>
      </div>
    </article>
  `;
}

function renderProductGrid(targetId, products, options = {}) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = products.map((p) => productCard(p, options)).join("");
}

function renderHomeMap() {
  const el = document.getElementById("home-product-map");
  if (!el) return;

  const order = ["empresas", "inteligencia", "marketing", "produtividade", "lifestyle"];
  el.innerHTML = order
    .map((pillarId) => {
      const pillar = PILLARS[pillarId];
      const items = productsForPillar(pillarId);
      return `
        <section class="map-block" id="mapa-${pillarId}">
          <div class="map-block-head">
            <div>
              <p class="card-kicker">${items.length} produtos</p>
              <h3>${pillar.title}</h3>
              <p>${pillar.subtitle}</p>
            </div>
            <a class="btn btn-ghost" href="${pillar.href}">Ver pilar</a>
          </div>
          <div class="product-grid">
            ${items.map((p) => productCard(p, { compact: true })).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path === "" ? "index.html" : path;
}

function buildNav() {
  const page = currentPage();
  const links = [
    { href: "index.html", label: "Home" },
    { href: "produtos.html", label: "Catálogo" },
    { href: "empresas.html", label: "Empresas" },
    { href: "inteligencia.html", label: "Inteligência" },
    { href: "marketing.html", label: "Marketing" },
    { href: "produtividade.html", label: "Produtividade" },
    { href: "lifestyle.html", label: "Lifestyle" },
    { href: "contato.html", label: "Contato" },
  ];

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Trust Corporation">
          <img src="assets/logo-trust.png" alt="Trust Corporation" class="brand-logo" />
          <span class="brand-text">
            <strong>Trust Corporation</strong>
            <small>Patrimônio & Legado</small>
          </span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" id="siteNav">
          ${links
            .map(
              (l) =>
                `<a href="${l.href}" class="${page === l.href ? "is-active" : ""}">${l.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;
}

function buildFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img src="assets/logo-trust.png" alt="Trust Corporation" class="footer-logo" />
          <p class="footer-claim">Holding digital de soluções para operação, inteligência e crescimento.</p>
          <p class="footer-meta">trustcorp.com.br</p>
        </div>
        <div>
          <h4>Pilares</h4>
          <a href="empresas.html">Empresas</a>
          <a href="inteligencia.html">Inteligência</a>
          <a href="marketing.html">Marketing</a>
          <a href="produtividade.html">Produtividade</a>
          <a href="lifestyle.html">Lifestyle</a>
        </div>
        <div>
          <h4>Acesso rápido</h4>
          <a href="produtos.html">Catálogo completo</a>
          <a href="sobre.html">Sobre</a>
          <a href="contato.html">Contato</a>
        </div>
        <div>
          <h4>Contato</h4>
          <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
          <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp ${CONTACT.whatsappDisplay}</a>
          <a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram @${CONTACT.instagram}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© ${new Date().getFullYear()} Trust Corporation. Todos os direitos reservados.</span>
      </div>
    </footer>
  `;
}

function mountChrome() {
  const navMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (navMount) navMount.innerHTML = buildNav();
  if (footerMount) footerMount.innerHTML = buildFooter();

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
}

function initFilters() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  const statusSelect = document.getElementById("filter-status");
  const pillarSelect = document.getElementById("filter-pillar");
  const searchInput = document.getElementById("filter-search");

  const apply = () => {
    const status = statusSelect?.value || "all";
    const pillar = pillarSelect?.value || "all";
    const q = (searchInput?.value || "").trim().toLowerCase();

    const filtered = PRODUCTS.filter((p) => {
      const statusOk = status === "all" || p.status === status;
      const pillarOk =
        pillar === "all" || p.pillar === pillar || (p.alsoIn && p.alsoIn.includes(pillar));
      const hay = `${p.name} ${p.tagline} ${p.description} ${p.domain}`.toLowerCase();
      const searchOk = !q || hay.includes(q);
      return statusOk && pillarOk && searchOk;
    });

    renderProductGrid("catalog-grid", filtered);
    const count = document.getElementById("catalog-count");
    if (count) count.textContent = `${filtered.length} produto${filtered.length === 1 ? "" : "s"}`;
  };

  statusSelect?.addEventListener("change", apply);
  pillarSelect?.addEventListener("change", apply);
  searchInput?.addEventListener("input", apply);
  apply();
}

function initContactPrefill() {
  const params = new URLSearchParams(window.location.search);
  const produto = params.get("produto");
  const field = document.getElementById("produto");
  if (produto && field) field.value = produto;

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const empresa = document.getElementById("empresa")?.value?.trim() || "";
    const produtoValor = document.getElementById("produto")?.value?.trim() || "Não informado";
    const mensagem = document.getElementById("mensagem")?.value?.trim() || "";

    const text = [
      "Olá, TrustCorp!",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      empresa ? `Empresa: ${empresa}` : null,
      `Interesse: ${produtoValor}`,
      mensagem ? `Mensagem: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
  });
}

function initHome() {
  const countEl = document.getElementById("product-total");
  if (countEl) countEl.textContent = String(PRODUCTS.length);
  renderHomeMap();
}

function initPillarPage(pillarId) {
  renderProductGrid("pillar-grid", productsForPillar(pillarId));
  const count = document.getElementById("pillar-count");
  if (count) {
    const n = productsForPillar(pillarId).length;
    count.textContent = `${n} produto${n === 1 ? "" : "s"} neste pilar`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mountChrome();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "produtos") initFilters();
  if (page === "contato") initContactPrefill();
  if (page && PILLARS[page]) initPillarPage(page);
});
