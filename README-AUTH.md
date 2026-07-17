# TrustCorp Hub — controle de acesso

O site continua público para visitação, mas **os serviços ficam bloqueados** até login.

## Papéis
- **Administrador** — senha `ADMIN_PASSWORD`
- **Cliente** — senha `CLIENT_PASSWORD`
- **Visitante** — vê o site, sem acesso aos serviços

## Variáveis no Railway
Defina em **Variables**:

```text
ADMIN_PASSWORD=sua-senha-admin
CLIENT_PASSWORD=sua-senha-cliente
SESSION_SECRET=string-longa-aleatoria
NODE_ENV=production
```

### Valores padrão (troque em produção)
- Admin: `TrustAdmin@2026`
- Cliente: `TrustClient@2026`

## Como funciona
1. Visitante abre trustcorp.com.br normalmente
2. Cards de serviço aparecem com botão **Bloqueado**
3. Ao clicar, abre modal de senha
4. Com senha correta, libera **Acessar** para todos os serviços
5. Cookie de sessão HTTP-only por 7 dias

## Endpoints
- `GET /api/session`
- `POST /api/login` `{ "password": "..." }`
- `POST /api/logout`
