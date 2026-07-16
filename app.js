/* TrustCorp Hub — clear catalog + product pages */
const PRODUCTS = [
  {
    id: "procontador",
    name: "ProContador",
    tagline: "Contabilidade operacional com cara de produto premium",
    description:
      "Centralize multiempresa, lançamentos, relatórios e risco fiscal em uma interface executiva. Ideal para escritórios e grupos que precisam de operação contábil clara, segura e preparada para IA.",
    problem: "Contabilidade espalhada em planilhas, sistemas confusos e pouca visão executiva.",
    solution: "Um shell unificado para operar empresas, fiscal e relatórios com clareza.",
    forWho: "Escritórios contábeis, holdings e grupos empresariais",
    url: "https://www.procontador.com.br",
    domain: "procontador.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: [
      "Operação multiempresa legível",
      "Fluxos fiscais e de auditoria",
      "Base pronta para IA e Open Finance",
    ],
  },
  {
    id: "crm",
    name: "Trust CRM",
    tagline: "Pipeline comercial sob controle",
    description:
      "Organize leads, oportunidades e follow-up em um CRM direto, feito para times que precisam vender com método e previsibilidade.",
    problem: "Vendas sem processo, leads perdidos e follow-up inconsistente.",
    solution: "Pipeline visual, histórico de relacionamento e rotina comercial clara.",
    forWho: "Times comerciais B2B e operações de vendas",
    url: "https://crm.trustcorp.com.br",
    domain: "crm.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Pipeline de oportunidades", "Gestão de leads", "Follow-up estruturado"],
  },
  {
    id: "legal",
    name: "Trust Legal",
    tagline: "Jurídico com prazo, rastro e clareza",
    description:
      "Contratos, prazos e fluxos legais em um ambiente digital para decisão rápida e operação rastreável.",
    problem: "Contratos e prazos perdidos em e-mail, pastas e planilhas.",
    solution: "Rotina jurídica digital com controle de documentos e datas críticas.",
    forWho: "Departamentos jurídicos e escritórios",
    url: "https://legal.trustcorp.com.br",
    domain: "legal.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Gestão de contratos", "Controle de prazos", "Rotina jurídica digital"],
  },
  {
    id: "fin",
    name: "Trust Fin",
    tagline: "Financeiro com indicadores acionáveis",
    description:
      "Acompanhe fluxo de caixa, cobranças e saúde financeira com visão executiva para decidir com números, não com achismo.",
    problem: "Financeiro reativo, indicadores atrasados e cobrança desorganizada.",
    solution: "Painel financeiro com indicadores e rotinas de cobrança.",
    forWho: "CFOs, controllers e gestores financeiros",
    url: "https://fin.trustcorp.com.br",
    domain: "fin.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    delivers: ["Fluxo de caixa", "Cobrança e indicadores", "Visão financeira unificada"],
  },
  {
    id: "cnpj",
    name: "Trust CNPJ",
    tagline: "Consulta completa CNPJ e CPF",
    description:
      "Central de Consultas Fiscais da TrustCorp: dados cadastrais, societários e fiscais em um único lugar — consulta CNPJ e CPF com responsabilidade e ética.",
    problem: "Consultas fiscais e cadastrais espalhadas, lentas e sem padrão operacional.",
    solution: "Portal único para consulta completa de CNPJ e CPF com dados cadastrais, societários e fiscais.",
    forWho: "Escritórios, compliance, crédito, jurídico e operações comerciais",
    url: "https://cnpj.trustcorp.com.br",
    domain: "cnpj.trustcorp.com.br",
    pillar: "empresas",
    status: "ativo",
    alsoIn: ["inteligencia"],
    delivers: ["Consulta CNPJ completa", "Consulta CPF", "Dados cadastrais, societários e fiscais"],
  },
  {
    id: "excel",
    name: "Trust Excel",
    tagline: "Planilhas e dados sem fricção",
    description:
      "Automatize rotinas de planilha, consolide relatórios e transforme dados operacionais em decisão — sem retrabalho manual.",
    problem: "Horas perdidas em planilhas manuais e versões desencontradas.",
    solution: "Automação e consolidação de dados em Excel com foco em produtividade.",
    forWho: "Operações, FP&A e analistas",
    url: "https://excel.trustcorp.com.br",
    domain: "excel.trustcorp.com.br",
    pillar: "produtividade",
    status: "ativo",
    alsoIn: ["empresas"],
    delivers: ["Automação de planilhas", "Relatórios consolidados", "Menos trabalho manual"],
  },
  {
    id: "watson",
    name: "Trust Watson",
    tagline: "Assistente inteligente para a operação",
    description:
      "Camada de IA para respostas, análise e automação cognitiva sobre processos e dados da empresa.",
    problem: "Equipes sobrecarregadas com tarefas repetitivas e busca de informação.",
    solution: "Assistente de IA integrado à operação para acelerar análise e resposta.",
    forWho: "Operações, suporte e times de inovação",
    url: "https://watson.trustcorp.com.br",
    domain: "watson.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Assistente de IA", "Análise assistida", "Automação cognitiva"],
  },
  {
    id: "mrholmes",
    name: "Mr. Holmes",
    tagline: "Inteligência investigativa aplicada",
    description:
      "Investigue padrões, cruzamentos e sinais ocultos com abordagem orientada a evidências e decisão.",
    problem: "Dados dispersos e dificuldade de enxergar padrões críticos.",
    solution: "Ferramenta de investigação e cruzamento de sinais para compliance e risco.",
    forWho: "Compliance, risco e inteligência",
    url: "https://mrholmes.trustcorp.com.br",
    domain: "mrholmes.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Investigação de padrões", "Cruzamento de sinais", "Insights acionáveis"],
  },
  {
    id: "oraculo",
    name: "Trust Oráculo",
    tagline: "Previsão para decidir antes",
    description:
      "Projeções, alertas e cenários para antecipar movimentos de mercado, operação e risco.",
    problem: "Decisões baseadas só no passado, sem visão de cenário futuro.",
    solution: "Camada preditiva com alertas e cenários para liderança.",
    forWho: "Liderança e estratégia",
    url: "https://oraculo.trustcorp.com.br",
    domain: "oraculo.trustcorp.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Projeções e cenários", "Alertas inteligentes", "Apoio à decisão"],
  },
  {
    id: "investigatop",
    name: "InvestigaTop",
    tagline: "Revelando ativos ocultos",
    description:
      "Investigação patrimonial, due diligence, análise de crédito e recuperação de ativos com tecnologia e expertise jurídica.",
    problem: "Dificuldade de mapear patrimônio, risco e ativos ocultos com segurança.",
    solution: "Plataforma de investigação patrimonial com relatórios e fluxos de ação.",
    forWho: "Escritórios, credores e due diligence",
    url: "https://investigatop.com.br",
    domain: "investigatop.com.br",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Pesquisa patrimonial", "Due diligence", "Recuperação de ativos"],
  },
  {
    id: "futurefish",
    name: "Future Fish",
    tagline: "Cenários de previsão exclusivos",
    description:
      "Acesso VIP a cenários e simulações de previsão para clientes autorizados do ecossistema.",
    problem: "Previsões estratégicas restritas e sem ambiente controlado.",
    solution: "Portal VIP de cenários e simulações com acesso autorizado.",
    forWho: "Clientes VIP e parceiros autorizados",
    url: "https://future.seligaaqui.online",
    domain: "future.seligaaqui.online",
    pillar: "inteligencia",
    status: "ativo",
    delivers: ["Cenários exclusivos", "Acesso controlado", "Previsão assistida"],
  },
  {
    id: "socialflow",
    name: "Social Flow",
    tagline: "Venda, crie e automatize em uma plataforma",
    description:
      "18 agentes de IA, Creator Studio, Instagram oficial, WhatsApp Bot, loja e pagamentos — tudo integrado para vender com menos esforço.",
    problem: "Marketing e vendas fragmentados em várias ferramentas.",
    solution: "Plataforma única de agentes, criativos, social e conversão.",
    forWho: "Criadores, e-commerces e times de growth",
    url: "https://www.socialflow.site",
    domain: "socialflow.site",
    pillar: "marketing",
    status: "ativo",
    delivers: ["18 agentes de IA", "Creator Studio", "Instagram + WhatsApp + loja"],
  },
  {
    id: "insta",
    name: "Trust Insta",
    tagline: "Operação social com foco em resultado",
    description:
      "Ferramentas para conteúdo, engajamento e rotina de Instagram alinhadas à suíte TrustCorp.",
    problem: "Rotina de Instagram sem processo e sem integração com a operação.",
    solution: "Ambiente Trust para operar conteúdo e engajamento no Instagram.",
    forWho: "Marketing e social media",
    url: "https://insta.trustcorp.com.br",
    domain: "insta.trustcorp.com.br",
    pillar: "marketing",
    status: "ativo",
    delivers: ["Rotina de conteúdo", "Engajamento", "Operação social"],
  },
  {
    id: "cortexpdf",
    name: "Cortex PDF",
    tagline: "PDF, OCR, tradução e conversão com IA",
    description:
      "Toolkit online de documentos com login: PDF, OCR, tradutor e conversores em um só lugar.",
    problem: "Documentos travados em formatos e fluxos manuais.",
    solution: "Suíte de PDF e OCR com IA para produtividade documental.",
    forWho: "Profissionais e operações documentais",
    url: "https://www.cortexpdf.online",
    domain: "cortexpdf.online",
    pillar: "produtividade",
    status: "ativo",
    delivers: ["PDF + OCR", "Tradução e conversão", "Acesso com login"],
  },
  {
    id: "vooscortex",
    name: "Voos Cortex",
    tagline: "Compare passagens com mais clareza",
    description:
      "Busque voos, compare opções, filtre resultados e acompanhe alertas de preço nacionais e internacionais.",
    problem: "Busca de passagens confusa e espalhada em várias abas.",
    solution: "Comparador simples com alertas e filtros úteis.",
    forWho: "Viajantes e compradores de passagem",
    url: "https://vooscortex.com.br",
    domain: "vooscortex.com.br",
    pillar: "lifestyle",
    status: "ativo",
    delivers: ["Comparação de voos", "Alertas de preço", "Filtros inteligentes"],
  },
  {
    id: "seligaaqui",
    name: "SeligaAqui",
    tagline: "TV, esportes e música em um só lugar",
    description:
      "Painel unificado de IPTV, transmissões ao vivo, esportes e música com acesso rápido por categoria.",
    problem: "Entretenimento espalhado em vários apps e fontes.",
    solution: "Hub único de TV, esportes e música.",
    forWho: "Usuários finais de entretenimento",
    url: "https://seligaaqui.online",
    domain: "seligaaqui.online",
    pillar: "lifestyle",
    status: "ativo",
    delivers: ["IPTV e ao vivo", "Esportes", "Música e rádios"],
  },
  {
    id: "gpsprivado",
    name: "GPS Privado",
    tagline: "Localização e privacidade sob demanda",
    description:
      "Produto em preparação no ecossistema TrustCorp. Em breve com proposta completa e acesso controlado.",
    problem: "Necessidade de localização com mais controle e privacidade.",
    solution: "Novo produto do ecossistema em fase de lançamento.",
    forWho: "Usuários e operações que exigem privacidade",
    url: "https://gpsprivado.online",
    domain: "gpsprivado.online",
    pillar: "lifestyle",
    status: "em_breve",
    delivers: ["Em definição", "Acesso controlado", "Lançamento planejado"],
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

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

function statusBadge(status) {
  return `<span class="badge badge-${status}">${STATUS_LABEL[status] || status}</span>`;
}

function productHref(product) {
  return `produto.html?id=${encodeURIComponent(product.id)}`;
}

function productCard(product, { compact = false } = {}) {
  const pillar = PILLARS[product.pillar];
  const isSoon = product.status === "em_breve";
  const ctaLabel = isSoon ? "Em breve" : "Acessar";

  return `
    <article class="product-card" data-status="${product.status}" data-pillar="${product.pillar}" id="${product.id}">
      <div class="card-top">
        <div>
          <p class="card-kicker">${pillar ? pillar.name : "TrustCorp"}</p>
          <h3><a class="card-title-link" href="${productHref(product)}">${product.name}</a></h3>
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
      <p class="card-domain">
        <a href="${product.url}" target="_blank" rel="noopener noreferrer">${product.domain}</a>
      </p>
      <div class="card-actions">
        <a class="btn btn-primary ${isSoon ? "is-disabled" : ""}"
           href="${isSoon ? "#" : product.url}"
           ${isSoon ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
          ${ctaLabel}
        </a>
        <a class="btn btn-ghost" href="${productHref(product)}">Detalhes</a>
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
  // Menu curto e claro
  const links = [
    { href: "index.html", label: "Home" },
    { href: "produtos.html", label: "Produtos" },
    { href: "sobre.html", label: "Sobre" },
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

  // Mini links inside step 1 should navigate to pillar pages without fighting parent <a>
  document.querySelectorAll(".step-mini[data-href]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const href = el.getAttribute("data-href");
      if (href) window.location.href = href;
    });
  });
}

function initPillarPage(pillarId) {
  renderProductGrid("pillar-grid", productsForPillar(pillarId));
  const count = document.getElementById("pillar-count");
  if (count) {
    const n = productsForPillar(pillarId).length;
    count.textContent = `${n} produto${n === 1 ? "" : "s"} neste pilar`;
  }
}

function initProductPage() {
  const root = document.getElementById("product-detail");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = id ? getProductById(id) : null;

  if (!product) {
    root.innerHTML = `
      <div class="panel">
        <h1>Produto não encontrado</h1>
        <p class="lead">Volte ao catálogo e escolha um produto válido.</p>
        <a class="btn btn-primary" href="produtos.html">Abrir catálogo</a>
      </div>
    `;
    return;
  }

  const pillar = PILLARS[product.pillar];
  const isSoon = product.status === "em_breve";
  document.title = `${product.name} | Trust Corporation`;

  root.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <div class="eyebrow">${pillar ? pillar.name : "Produto"} · ${STATUS_LABEL[product.status]}</div>
        <h1>${product.name}</h1>
        <p class="lead">${product.tagline}</p>
        <p class="card-domain" style="margin-bottom:1rem">
          <a href="${product.url}" target="_blank" rel="noopener noreferrer">${product.domain}</a>
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary ${isSoon ? "is-disabled" : ""}"
             href="${isSoon ? "#" : product.url}"
             ${isSoon ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
            ${isSoon ? "Em breve" : "Acessar produto"}
          </a>
          <a class="btn btn-secondary" href="contato.html?produto=${encodeURIComponent(product.name)}">Solicitar demo</a>
          <a class="btn btn-ghost" href="produtos.html">Voltar ao catálogo</a>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container split">
        <div class="panel">
          <h2 style="margin-top:0">O que entrega</h2>
          <p class="card-desc">${product.description}</p>
          <ul class="list-plain">
            ${product.delivers.map((d) => `<li>${d}</li>`).join("")}
          </ul>
        </div>
        <div class="panel">
          <h2 style="margin-top:0">Para quem é</h2>
          <p class="card-desc">${product.forWho}</p>
          <h3 style="color:var(--gold-soft);margin:1rem 0 0.4rem">Problema</h3>
          <p class="card-desc">${product.problem}</p>
          <h3 style="color:var(--gold-soft);margin:1rem 0 0.4rem">Solução</h3>
          <p class="card-desc">${product.solution}</p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="cta-band">
        <h2>Quer este produto na sua operação?</h2>
        <p>Fale com a TrustCorp e avaliamos o melhor caminho de acesso ou integração.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="contato.html?produto=${encodeURIComponent(product.name)}">Falar com especialista</a>
          <a class="btn btn-secondary" href="https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
            `Olá TrustCorp! Tenho interesse no produto ${product.name}.`
          )}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  mountChrome();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "produtos") initFilters();
  if (page === "contato") initContactPrefill();
  if (page === "produto") initProductPage();
  if (page && PILLARS[page]) initPillarPage(page);
});
