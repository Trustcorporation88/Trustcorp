# TrustCorp Hub — publicar no Railway

## O que você precisa no Railway

1. Conta em [railway.app](https://railway.app)
2. Projeto novo (ex.: `trustcorp-hub`)
3. Serviço Web (não banco de dados)
4. (Opcional) Domínio custom: `www.trustcorp.com.br`
5. Cartão / plano se sair do free trial (conforme conta)

**Não precisa** de variáveis de ambiente para este MVP estático.

---

## Arquivos já prontos neste projeto

- `package.json` — serve estático com `serve`
- `railway.toml` — start command
- `nixpacks.toml` — Node 20
- páginas HTML + `app.js` + `styles.css` + `assets/logo-trust.png`

---

## Opção A — Deploy pelo GitHub (recomendado)

1. Crie um repositório no GitHub e envie esta pasta
2. No Railway: **New Project → Deploy from GitHub repo**
3. Selecione o repositório
4. Railway detecta Node e sobe o serviço
5. Em **Settings → Networking → Generate Domain**
6. Abra a URL `*.up.railway.app` e teste

### Domínio próprio

1. Railway → serviço → **Settings → Networking → Custom Domain**
2. Adicione `www.trustcorp.com.br` (e se quiser `trustcorp.com.br`)
3. No DNS (Cloudflare ou onde o domínio estiver):
   - `www` → CNAME para o domínio que o Railway indicar
   - apex `@` → CNAME/ALIAS conforme instrução do Railway (ou redirect Cloudflare `trustcorp.com.br` → `www`)
4. Aguarde SSL ficar **Active**

---

## Opção B — Railway CLI

```bash
npm i -g @railway/cli
railway login
railway init
railway up
railway domain
```

---

## Comando local (teste antes)

```bash
cd trustcorp_hub
npm install
npm start
# abra http://localhost:3000
```

---

## Checklist pós-deploy

- [ ] Home carrega com logo
- [ ] Menu navega entre páginas
- [ ] Cards abrem links externos
- [ ] Filtros em `/produtos`
- [ ] Contato pré-preenche produto
- [ ] Mobile ok
- [ ] Domínio `www.trustcorp.com.br` com HTTPS

---

## Observações

- Subdomínios (`crm.trustcorp.com.br`, etc.) podem continuar no Cloudflare; só o hub principal vai para o Railway.
- Formulário de contato ainda é MVP visual — conectar e-mail/WhatsApp depois.
- Se o build falhar: confira se a **Root Directory** no Railway aponta para a pasta do site.
