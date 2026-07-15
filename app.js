/* TrustCorp Hub — shared data + UI */
const PRODUCTS = [
  {
    id: "procontador",
    name: "ProContador",
    tagline: "Contabilidade operacional com cara de produto premium",
    description:
      "Operação multiempresa, lançamentos, relatórios, risco fiscal e base preparada para IA e Open Finance.",
    url: "https://www.procontador.com.br",
    pillar: "empresas",
    status: "ativo",
    audience: "Escritórios contábeis e grupos empresariais",
    delivers: ["Multiempresa legível", "Fluxos fiscais e auditoria", "Base para IA e Open Finance"],
  },
  {
    id: "crm",
    name: "Trust CRM",
    tagline: "Pipeline e relacionamento sob controle",
    description:
      "Centralize leads, oportunidades e follow-up comercial com visão executiva da operação de vendas.",
    url: "https://crm.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    audience: "Times comerciais e operações B2B",
    delivers: ["Pipeline comercial", "Gestão de leads", "Follow-up estruturado"],
  },
  {
    id: "legal",
    name: "Trust Legal",
    tagline: "Operação jurídica com clareza e prazo",
    description:
      "Organize contratos, prazos e fluxos legais em um ambiente pensado para decisão rápida e rastreável.",
    url: "https://legal.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    audience: "Departamentos jurídicos e escritórios",
    delivers: ["Contratos e documentos", "Controle de prazos", "Rotina jurídica digital"],
  },
  {
    id: "fin",
    name: "Trust Fin",
    tagline: "Financeiro com indicadores acionáveis",
    description:
      "Acompanhe fluxo de caixa, cobranças e indicadores financeiros com visão executiva da saúde do negócio.",
    url: "https://fin.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    audience: "CFOs, controllers e gestores",
    delivers: ["Fluxo de caixa", "Cobrança e indicadores", "Visão financeira unificada"],
  },
  {
    id: "excel",
    name: "Trust Excel",
    tagline: "Planilhas e dados sem fricção",
    description:
      "Automatize rotinas de planilha, consolide relatórios e transforme dados operacionais em decisão.",
    url: "https://excel.trustcorp.com.br",
    pillar: "produtividade",
    status: "ativo",
    audience: "Operações, FP&A e analistas",
    delivers: ["Automação de planilhas", "Relatórios consolidados", "Menos trabalho manual"],
    alsoIn: ["empresas"],
  },
  {
    id: "watson",
    name: "Trust Watson",
    tagline: "Assistente inteligente para a operação",
    description:
      "Camada de IA para respostas, análise e automação cognitiva sobre processos e dados da empresa.",
    url: "https://watson.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    audience: "Operações e times de inovação",
    delivers: ["Assistente de IA", "Análise assistida", "Automação cognitiva"],
  },
  {
    id: "mrholmes",
    name: "Mr. Holmes",
    tagline: "Inteligência investigativa aplicada",
    description:
      "Investigue padrões, cruzamentos e sinais ocultos com uma abordagem orientada a evidências e decisão.",
    url: "https://mrholmes.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    audience: "Compliance, risco e inteligência",
    delivers: ["Investigação de padrões", "Cruzamento de sinais", "Insights acionáveis"],
  },
  {
    id: "oraculo",
    name: "Trust Oráculo",
    tagline: "Previsão e inteligência para decidir antes",
    description:
      "Projeções, alertas e cenários para antecipar movimentos de mercado, operação e risco.",
    url: "https://oraculo.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    audience: "Liderança e estratégia",
    delivers: ["Projeções e cenários", "Alertas inteligentes", "Apoio à decisão"],
  },
  {
    id: "investigatop",
    name: "InvestigaTop",
    tagline: "Revelando ativos ocultos",
    description:
      "Investigação patrimonial, due diligence, análise de crédito e recuperação de ativos com IA e expertise jurídica.",
    url: "https://investigpat-myaduyqd.manus.space/",
    pillar: "inteligencia",
    status: "manutencao",
    note: "Domínio principal em manutenção. Acesso temporário via ambiente de backup.",
    audience: "Escritórios, credores e due diligence",
    delivers: ["Pesquisa patrimonial", "Due diligence", "Recuperação de ativos"],
  },
  {
    id: "futurefish",
    name: "Future Fish",
    tagline: "Cenários de previsão exclusivos",
    description:
      "Acesso VIP a cenários e simulações de previsão para clientes autorizados do ecossistema.",
    url: "https://future.seligaaqui.online",
    pillar: "inteligencia",
    status: "ativo",
    audience: "Clientes VIP e parceiros autorizados",
    delivers: ["Cenários exclusivos", "Acesso controlado", "Previsão assistida"],
  },
  {
    id: "socialflow",
    name: "Social Flow",
    tagline: "Venda, crie e automatize em uma plataforma",
    description:
      "18 agentes de IA, Creator Studio, Instagram oficial, WhatsApp Bot, loja e pagamentos integrados.",
    url: "https://www.socialflow.site",
    pillar: "marketing",
    status: "ativo",
    audience: "Criadores, e-commerces e times de growth",
    delivers: ["18 agentes de IA", "Creator Studio", "Instagram + WhatsApp + loja"],
  },
  {
    id: "insta",
    name: "Trust Insta",
    tagline: "Operação social com foco em resultado",
    description:
      "Ferramentas para conteúdo, engajamento e rotina de Instagram alinhadas à suíte TrustCorp.",
    url: "https://insta.trustcorp.com.br",
    pillar: "marketing",
    status: "ativo",
    audience: "Marketing e social media",
    delivers: ["Rotina de conteúdo", "Engajamento", "Operação social"],
  },
  {
    id: "cortexpdf",
    name: "Cortex PDF",
    tagline: "PDF, OCR, tradução e conversão com IA",
    description:
      "Toolkit online de documentos com login: PDF, OCR, tradutor e conversores em um só lugar.",
    url: "https://www.cortexpdf.online",
    pillar: "produtividade",
    status: "ativo",
    audience: "Profissionais e operações documentais",
    delivers: ["PDF + OCR", "Tradução e conversão", "Acesso com login"],
  },
  {
    id: "vooscortex",
    name: "Voos Cortex",
    tagline: "Compare passagens com mais clareza",
    description:
      "Busque voos, compare opções, filtre resultados e acompanhe alertas de preço nacionais e internacionais.",
    url: "https://vooscortex.com.br",
    pillar: "lifestyle",
    status: "ativo",
    audience: "Viajantes e compradores de passagem",
    delivers: ["Comparação de voos", "Alertas de preço", "Filtros inteligentes"],
  },
  {
    id: "seligaaqui",
    name: "SeligaAqui",
    tagline: "TV, esportes e música em um só lugar",
    description:
      "Painel unificado de IPTV, transmissões ao vivo, esportes e música com acesso rápido por categoria.",
    url: "https://seligaaqui.online",
    pillar: "lifestyle",
    status: "ativo",
    audience: "Usuários finais de entretenimento",
    delivers: ["IPTV e ao vivo", "Esportes", "Música e rádios"],
  },
  {
    id: "gpsprivado",
    name: "GPS Privado",
    tagline: "Localização e privacidade sob demanda",
    description:
      "Produto em preparação no ecossistema TrustCorp. Em breve com proposta completa e acesso controlado.",
    url: "https://gpsprivado.online",
    pillar: "lifestyle",
    status: "em_breve",
    audience: "Usuários e operações que exigem privacidade",
    delivers: ["Em definição", "Acesso controlado", "Lançamento planejado"],
  },
];

const PILLARS = {
  empresas: {
    id: "empresas",
    name: "Empresas",
    title: "Operação Empresarial",
    subtitle: "Contábil, comercial, jurídico e financeiro sob uma mesma liderança digital.",
    href: "empresas.html",
    accent: "gold",
  },
  inteligencia: {
    id: "inteligencia",
    name: "Inteligência",
    title: "Inteligência & Investigação",
    subtitle: "IA, previsão, due diligence e leitura de sinais para decidir com evidência.",
    href: "inteligencia.html",
    accent: "teal",
  },
  marketing: {
    id: "marketing",
    name: "Marketing",
    title: "Marketing & Vendas",
    subtitle: "Agentes, criativos, Instagram e automação comercial com foco em conversão.",
    href: "marketing.html",
    accent: "gold",
  },
  produtividade: {
    id: "produtividade",
    name: "Produtividade",
    title: "Produtividade & Documentos",
    subtitle: "PDF, OCR, planilhas e rotinas que removem atrito do dia a dia.",
    href: "produtividade.html",
    accent: "teal",
  },
  lifestyle: {
    id: "lifestyle",
    name: "Lifestyle",
    title: "Lifestyle & Experiências",
    subtitle: "Produtos de consumo e utilidade do ecossistema, com identidade própria.",
    href: "lifestyle.html",
    accent: "gold",
  },
};

const STATUS_LABEL = {
  ativo: "Ativo",
  manutencao: "Manutenção",
  em_breve: "Em breve",
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
  const ctaLabel =
    product.status === "em_breve"
      ? "Em breve"
      : product.status === "manutencao"
        ? "Acesso temporário"
        : "Acessar produto";
  const ctaDisabled = product.status === "em_breve";
  const note = product.note
    ? `<p class="card-note">${product.note}</p>`
    : "";

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
      ${note}
      <div class="card-actions">
        <a class="btn btn-primary ${ctaDisabled ? "is-disabled" : ""}" href="${
          ctaDisabled ? "#" : product.url
        }" ${ctaDisabled ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
          ${ctaLabel}
        </a>
        <a class="btn btn-ghost" href="contato.html?produto=${encodeURIComponent(product.name)}">Solicitar demo</a>
      </div>
    </article>
  `;
}

function renderProductGrid(targetId, products, options = {}) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = products.map((p) => productCard(p, options)).join("");
}

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path === "" ? "index.html" : path;
}

function buildNav() {
  const page = currentPage();
  const links = [
    { href: "index.html", label: "Home" },
    { href: "produtos.html", label: "Produtos" },
    { href: "empresas.html", label: "Empresas" },
    { href: "inteligencia.html", label: "Inteligência" },
    { href: "marketing.html", label: "Marketing" },
    { href: "produtividade.html", label: "Produtividade" },
    { href: "lifestyle.html", label: "Lifestyle" },
    { href: "sobre.html", label: "Sobre" },
    { href: "contato.html", label: "Contato" },
  ];

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Trust Corporation">
          <img src="assets/logo-trust.png" alt="Trust Corporation — Patrimônio & Legado" class="brand-logo" />
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
          <p class="footer-meta">www.trustcorp.com.br</p>
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
          <h4>Holding</h4>
          <a href="produtos.html">Catálogo completo</a>
          <a href="sobre.html">Sobre a TrustCorp</a>
          <a href="contato.html">Falar com especialista</a>
        </div>
        <div>
          <h4>Confiança</h4>
          <p>Ambientes protegidos · HTTPS · Cloudflare</p>
          <p>LGPD-aware · Acesso controlado por produto</p>
          <p class="footer-meta">MVP de demonstração</p>
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
      const hay = `${p.name} ${p.tagline} ${p.description}`.toLowerCase();
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
}

function initHome() {
  renderProductGrid(
    "featured-grid",
    PRODUCTS.filter((p) =>
      ["procontador", "socialflow", "investigatop", "cortexpdf", "crm", "oraculo"].includes(p.id)
    ),
    { compact: true }
  );
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
