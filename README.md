# mbvfy_LP_Claude

Landing page da MBVfY Aço Mob, feita com Vite + Tailwind CSS.

## Como rodar

Precisa do Node.js (versão LTS).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # site final em dist/
npm run preview  # confere o conteúdo de dist/
npm run deploy   # publica no Cloudflare Workers (depois de npx wrangler login)
```

O site é publicado no Cloudflare Workers a partir da pasta `dist/` (configuração em `wrangler.jsonc`).
