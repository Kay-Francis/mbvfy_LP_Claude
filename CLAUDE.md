# CLAUDE.md

Landing page da **MBVfY Aço Mob**, fábrica de móveis de aço para o comércio. A página existe para gerar pedidos de orçamento (WhatsApp ou formulário) a partir de anúncios do Google Ads. Ela substitui a página antiga em WordPress/Elementor, que serve só de referência de conteúdo, não de código.

Este arquivo é só um mapa. Cada assunto tem seu próprio arquivo: leia o que for relevante para a tarefa antes de começar.

## Onde está cada coisa

| Arquivo | O que guarda | Quando ler |
| --- | --- | --- |
| [PRODUCT.md](PRODUCT.md) | Público, objetivo, posicionamento, produtos, provas reais, stack (Impeccable) | Antes de qualquer texto ou seção nova |
| `DESIGN.md` | Sistema visual (ainda não existe: gerar com `/impeccable document`) | Antes de mexer no visual, quando existir |
| [GLOSSARY.md](GLOSSARY.md) | Vocabulário do projeto (dobra, pedido de orçamento, Inspiração…) | Ao nomear coisas em issues, código e textos |
| [CODING_STANDARDS.md](CODING_STANDARDS.md) | Regras do dono e convenções de código e visual | Ao escrever e ao revisar (`/code-review`) |
| [docs/componentes.md](docs/componentes.md) | Como funcionam formulário, WhatsApp, logo, carrosséis, comparador | Ao mexer em um desses componentes |
| [docs/adr/](docs/adr/) | Decisões difíceis de desfazer e o porquê | Antes de mudar stack, build ou hospedagem |
| [docs/pendencias.md](docs/pendencias.md) | O que falta fazer (do dono e técnico) | Ao planejar o próximo passo |
| [docs/agents/](docs/agents/) | Configuração das skills do Matt (issues, etiquetas, domínio) | Usado pelas próprias skills |

## Stack e comandos

Vite + Tailwind CSS nas últimas versões, publicado como site estático no **Cloudflare Workers** (ver [ADR 0001](docs/adr/0001-vite-tailwind-sem-preflight.md) e [ADR 0002](docs/adr/0002-cloudflare-workers.md)).

```bash
npm install        # primeira vez
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # gera o site final em dist/
npm run preview    # confere o dist/ antes de publicar
npm run preview:cf # build + roda o dist/ no Workers local (http://localhost:8787)
npm run deploy     # build + publica no Cloudflare Workers (só com pedido do dono)
```

- Páginas: `index.html`, `obrigado.html` e `politicas.html` (Termos de Uso e Política de Privacidade, texto do dono vindo do WordPress, com ajustes aprovados por ele: só mudar a pedido do dono) na raiz (entradas em `vite.config.js`).
- CSS: `assets/css/main.css` (Tailwind + tokens da marca) importa o CSS original `assets/css/style.css`. Seções novas usam classes do Tailwind; o CSS antigo vai sendo convertido sem mudar o visual.
- JS: `assets/js/main.js`, sem framework.
- O que vai ao ar é sempre a pasta `dist/`, nunca a raiz. Não usar `?v=` nos links: o Vite já renomeia os arquivos a cada build.
- No app do Claude, `.claude/launch.json` (não versionado) roda o `npm run dev` na porta 5173.

## Publicação (Cloudflare Workers)

Site só de arquivos estáticos, sem código de Worker. A configuração está em [wrangler.jsonc](wrangler.jsonc): `assets.directory` aponta para `./dist`, as URLs ficam sem `.html` (`/obrigado.html` → `/obrigado`) e endereço inexistente responde 404. No ar desde 20/11/2026 em https://mbvfyacomob.com.br (e `www`), por rotas no `wrangler.jsonc`; sem endereço `workers.dev`. Publica-se com `npm run deploy` (no Windows, `npm.cmd`/`npx.cmd`; login já feito pelo dono) ou pelo Workers Builds ligado ao GitHub (build `npm run build`, deploy `npx wrangler deploy`). Arquivos de nome fixo (como `og-image.jpg`) ficam em `public/`. E-mail `contato@` pelo Email Routing da Cloudflare, encaminhando para o Gmail. Nunca publicar ou alterar a conta da Cloudflare sem pedido explícito do dono.

## Como trabalhar

**Fluxo de engenharia (skills do Matt).** Ideia nova: `/grill-with-docs` → (se for grande) `/to-spec` → `/to-tickets` → `/implement` com `/tdd` → `/code-review` → `/retro`. Bug difícil: `/diagnosing-bugs`. Issues no GitHub de Kay-Francis/mbvfy_LP_Claude via `gh` ([docs/agents/issue-tracker.md](docs/agents/issue-tracker.md)); etiquetas em [docs/agents/triage-labels.md](docs/agents/triage-labels.md); termos novos vão para o `GLOSSARY.md` e decisões difíceis de desfazer viram ADR ([docs/agents/domain.md](docs/agents/domain.md)).

**Fluxo de design (Impeccable).** Todo trabalho visual passa por `/impeccable`, que lê `PRODUCT.md` e `DESIGN.md`. Os hooks rodam sozinhos após cada edição de HTML/CSS/JS (config em `.impeccable/config.json`); tratar cada aviso conforme a instrução do próprio hook. Fato novo sobre o negócio vai para o `PRODUCT.md`, não para cá.

**Regras que valem sempre** (o resto está em [CODING_STANDARDS.md](CODING_STANDARDS.md)):

- Responder e escrever todo o conteúdo do site em **português do Brasil**.
- Marca escrita sempre **MBVfY Aço Mob**.
- Nunca inventar ou reescrever depoimentos, clientes, números ou certificações.
- As fotos da galeria Inspiração não são trabalhos da MBVfY: nunca apresentá-las como tal.
- Repositório: https://github.com/Kay-Francis/mbvfy_LP_Claude (branch `main`).
