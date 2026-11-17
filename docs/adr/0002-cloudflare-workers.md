# Publicação no Cloudflare Workers

O dono escolheu publicar no Cloudflare Workers (16/11/2026), no lugar do GitHub Pages ou do Cloudflare Pages, que estavam em estudo. O site é publicado só como arquivos estáticos (static assets), sem código de Worker: o `wrangler.jsonc` aponta `assets.directory` para `./dist`, e o deploy é `npm run deploy` (build + `wrangler deploy`), à mão ou pelo Workers Builds ligado ao repositório do GitHub.

## Consequências

- Por padrão, o Workers tira o `.html` das URLs: `/obrigado.html` redireciona para `/obrigado`. A conversão do Google Ads deve usar "URL contém `/obrigado`".
- Um Worker com código (por exemplo, para receber o formulário sem o FormSubmit) pode ser acrescentado depois no mesmo projeto.
