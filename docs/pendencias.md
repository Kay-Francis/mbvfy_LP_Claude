# Pendências

Atualizado em 20/11/2026. Quando uma pendência virar trabalho, abrir uma issue no GitHub (ver [docs/agents/issue-tracker.md](agents/issue-tracker.md)) e tirá-la daqui.

## Com o dono

- [ ] **Ativar o formulário:** fazer um envio de teste e clicar em "Activate Form" no e-mail do FormSubmit em mbvfyacomob@gmail.com. Até lá, os pedidos não chegam.
- [ ] **Revisar a copy.** Pontos já levantados: o passo 01 de "Como funciona" fala só em WhatsApp; o e-mail exibido (contato@mbvfyacomob.com.br) é diferente do que recebe o formulário (mbvfyacomob@gmail.com).
- [x] **Antes e depois de loja** (18/11/2026): segundo comparador "Material de construção: do depósito à área de vendas".
- [x] **Conta da Cloudflare** (20/11/2026): `wrangler login` feito pelo dono na conta mbvfyacomob@gmail.com. No Windows, usar `npx.cmd` (a política de scripts bloqueia o `npx.ps1`).

## Domínio e e-mail (saída da HostGator)

Decisão do dono (20/11/2026): sair da HostGator; o `contato@mbvfyacomob.com.br` passa a **só receber**, sem custo, pelo **Email Routing da Cloudflare**, encaminhando para mbvfyacomob@gmail.com. O domínio `.com.br` continua registrado no Registro.br (a Cloudflare não registra `.br`); só os nameservers vão para a Cloudflare. Ordem (não cancelar a HostGator antes do fim):

- [x] **Registro.br** (20/11/2026): domínio na conta do dono.
- [x] **Registro.br, provedor de serviços** (20/11/2026): trocado de HostGator (Newfold, 43) para "Nenhum"; o domínio é administrado direto pelo Registro.br e a renovação passa a ser paga lá. Falta conferir contatos e data de expiração.
- [x] **Backup dos e-mails** (20/11/2026): o e-mail fica no Titan (mx1/mx2.titan.email, revendido pela HostGator). O IMAP do Titan recusou o Thunderbird; o dono encaminhou para o Gmail o único e-mail que importava.
- [x] **Cloudflare + Registro.br** (20/11/2026): os nameservers antigos (`ace`/`stevie`) eram de outra conta da Cloudflare, desconhecida. O domínio foi adicionado à conta do dono (mbvfyacomob@gmail.com), o DNS foi limpo (só `A @` e `A www` → 69.6.249.241 com proxy, mais MX/TXT/SRV do Titan e cPanel) e os nameservers no Registro.br viraram `bingo.ns.cloudflare.com` e `sterling.ns.cloudflare.com`. O WordPress segue servido pela HostGator através da Cloudflare.
- [x] **Email Routing** (20/11/2026): ativo; MX do Titan e SPF antigo removidos (ficaram `route1/2/3.mx.cloudflare.net` e `v=spf1 include:_spf.mx.cloudflare.net ~all`); regra `contato@mbvfyacomob.com.br` → mbvfyacomob@gmail.com ativa; catch-all desligado.
- [x] **Testar o contato@** (20/11/2026): e-mail de teste enviado de outro endereço chegou no Gmail.
- [x] **Site novo no domínio** (20/11/2026): publicado no Worker `mbvfy-lp` com rotas `mbvfyacomob.com.br/*` e `www.mbvfyacomob.com.br/*` (em `wrangler.jsonc`). O WordPress saiu do ar pelo domínio.
- [ ] **Registro.br:** conferir contatos e data de expiração (a renovação agora é paga direto lá).
- [ ] **DNS depois do cancelamento:** os registros A apontam para o IP da HostGator (69.6.249.241). O Worker responde antes, então o site não depende dele, mas depois de cancelar dá para limpar as sobras do cPanel (SRV, `_caldav`, `_carddav`, `_cpanel-dcv`, DKIM `default._domainkey` e `titan1._domainkey`).
- [ ] **Cancelar a HostGator** só depois de tudo acima testado.
- Limite conhecido: respostas saem do Gmail (mbvfyacomob@gmail.com), não do contato@. Para enviar como contato@ no futuro: Google Workspace ou Zoho Mail.

## Técnicas

- [x] **Configurar o Cloudflare Workers** (16/11/2026): `wrangler.jsonc`, scripts `preview:cf` e `deploy`, testado no Workers local.
- [x] **Primeiro deploy** (20/11/2026): `npm run deploy`, no ar em mbvfyacomob.com.br. Se o dono quiser deploy automático a cada push, ligar o Workers Builds ao GitHub no painel da Cloudflare.
- [x] **Imagens do site antigo** (16/11/2026): primeira dobra, antes e depois e ícones copiados para `assets/img/`.
- [x] **Imagem de compartilhamento (`og:image`)** (20/11/2026): `public/og-image.jpg` (1200×630, da foto da loja de bebidas), servida em https://mbvfyacomob.com.br/og-image.jpg.
- [x] **Google Ads** (20/11/2026): tag do Google `AW-11342020876` (mesma tag do `GT-WBK8WZ72`, que também envia ao Google Analytics `G-KBZ3YHDPJ0`) carregada pelo `main.js`. Conversões reaproveitadas da conta: "Solicitou Orçamento Formulário" (dispara ao abrir `/obrigado`) e "[Contato] - Click Whatapp" (clique nos botões de WhatsApp, menos na página de obrigado). Códigos em `GOOGLE_ADS` no `main.js`. O contêiner GTM-N8324XFP do site antigo não é mais usado.
- [ ] **Google Ads, conferir em 1 a 2 dias:** status das conversões em Metas > Conversões deve sair de "Configuração incorreta"/"Requer atenção". Recarregar o saldo da conta (estava esgotado em 20/11/2026).
- [ ] **Pixel da Meta (para depois):** só quando o dono for anunciar na Meta (Facebook/Instagram). Mesmo jeito do Google Ads: ID do pixel no `main.js`, evento `Lead` na página de obrigado e `Contact` no clique do WhatsApp.
- [ ] **DESIGN.md:** gerar com `/impeccable document` e então tirar as regras visuais do `CODING_STANDARDS.md`.
