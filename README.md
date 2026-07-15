# Trust Corporation Hub

Site holding da TrustCorp — https://trustcorp.com.br

## Contatos oficiais
- E-mail: flavio@trustcorp.com.br
- WhatsApp: @frinaldi.co (link: wa.me/5514998370223)
- Instagram: [@frinaldi.co](https://instagram.com/frinaldi.co)

## InvestigaTop (temporário)
- https://investigpat-myaduyqd.manus.space/

## Publicar no Railway (passo a passo)

### 1) Conectar o GitHub
1. Acesse [railway.app](https://railway.app) e faça login
2. **New Project**
3. **Deploy from GitHub repo**
4. Autorize o Railway no GitHub (se pedir)
5. Selecione o repositório: `Trustcorporation88/Trustcorp`
6. Branch: **`main`**

### 2) Configuração do serviço
- **Root Directory:** deixe vazio (raiz do repo)
- **Builder:** Dockerfile (automático) ou Nixpacks
- **Start Command:** `npm start` (já vem no package.json / Dockerfile)

### 3) Domínio
1. No serviço: **Settings → Networking → Generate Domain**
2. Teste a URL `*.up.railway.app`
3. **Custom Domain:**
   - adicione `trustcorp.com.br`
   - adicione `www.trustcorp.com.br`
4. No DNS (Cloudflare), use o CNAME/registros que o Railway mostrar
5. Espere o SSL ficar **Active**

### 4) Redeploy após mudanças
1. Faça push na branch `main` no GitHub  
   **ou** no Railway clique em **Deploy / Redeploy**
2. Aguarde o build ficar **Success**
3. Abra o site e force refresh: **Ctrl+F5**

### 5) Se o build falhar
- Confirme branch = `main`
- Root Directory vazio
- Veja o log do build e copie as últimas linhas

## Local
```bash
npm install
npm start
# http://localhost:3000
```
