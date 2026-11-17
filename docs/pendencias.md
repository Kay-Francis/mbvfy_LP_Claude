# Pendências

Atualizado em 16/11/2026. Quando uma pendência virar trabalho, abrir uma issue no GitHub (ver [docs/agents/issue-tracker.md](agents/issue-tracker.md)) e tirá-la daqui.

## Com o dono

- [ ] **Ativar o formulário:** fazer um envio de teste e clicar em "Activate Form" no e-mail do FormSubmit em mbvfyacomob@gmail.com. Até lá, os pedidos não chegam.
- [ ] **Revisar a copy.** Pontos já levantados: o passo 01 de "Como funciona" fala só em WhatsApp; o e-mail exibido (contato@mbvfyacomob.com.br) é diferente do que recebe o formulário (mbvfyacomob@gmail.com).
- [ ] **Antes e depois de loja:** o dono vai enviar as fotos. Manter o comparador do estoque (depósito) e acrescentar o da loja (por exemplo, abas "Estoque | Loja" ou um segundo comparador).
- [ ] **Conta da Cloudflare:** criar ou entrar na conta e rodar `npx wrangler login` na pasta do projeto (login feito pelo próprio dono).

## Técnicas

- [x] **Configurar o Cloudflare Workers** (16/11/2026): `wrangler.jsonc`, scripts `preview:cf` e `deploy`, testado no Workers local.
- [ ] **Primeiro deploy:** depois do login do dono, `npm run deploy` (o site sai em `mbvfy-lp.<conta>.workers.dev`). Se o dono quiser deploy automático a cada push, ligar o Workers Builds ao GitHub no painel da Cloudflare. Depois, apontar o domínio.
- [ ] **Imagens do site antigo:** foto da primeira dobra, fotos do antes e depois, `og:image` e favicon ainda vêm de `mbvfyacomob.com.br/wp-content/...`. Copiar para `assets/img/` antes de desligar o WordPress.
- [ ] **Google Ads:** instalar a tag do Google e configurar a conversão na visita à página de obrigado (regra "URL contém `/obrigado`"; o evento `generate_lead` já é disparado).
- [ ] **DESIGN.md:** gerar com `/impeccable document` e então tirar as regras visuais do `CODING_STANDARDS.md`.
