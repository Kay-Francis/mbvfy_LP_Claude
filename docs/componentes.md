# Componentes da página

Como funciona cada parte com comportamento próprio. Regras de conteúdo e visual estão em [CODING_STANDARDS.md](../CODING_STANDARDS.md).

## Formulário de orçamento

- Envia por e-mail para **mbvfyacomob@gmail.com** via FormSubmit (`FORM_ENDPOINT` em `assets/js/main.js`).
- Campos: nome, WhatsApp, e-mail, tipo de comércio, o que precisa, mais o campo-armadilha `_honey` contra spam.
- Após o envio dispara o evento `generate_lead` (se a tag do Google `gtag` estiver instalada) e redireciona para `obrigado.html`, página de agradecimento (noindex) usada como conversão no Google Ads.
- No Cloudflare Workers, `/obrigado.html` redireciona para `/obrigado` (comportamento padrão de `html_handling`). A conversão do Google Ads deve usar a regra "URL contém `/obrigado`".

## WhatsApp

Número único na constante `WHATSAPP` em `assets/js/main.js`. Todo link com `data-wa="mensagem"` vira link do WhatsApp com a mensagem pronta.

## Logo

**SVG inline** em `index.html` e `obrigado.html`, recriado a partir da imagem original: textos "mbv" (laranja), "FY" (branco), "AÇO" (branco fino), "mob" (laranja) e a cruz branca, cada peça com a classe `lp-*`.

- Animação de entrada (`.logo-anim.is-anim` em `style.css`, disparada pelo `main.js`): a cruz se desenha e as quatro palavras chegam de lados diferentes (esquerda, cima, baixo, direita) e se encontram; repete ao passar o mouse.
- Tamanho: 160px de largura (132px no celular). A linha horizontal passa um pouco além de "mbv" e "mob" (viewBox `-14 0 228 112`).

## Carrosséis (`[data-marquee]`)

Usados nos depoimentos e na galeria Inspiração. O `main.js` duplica os itens para o movimento contínuo e liga as **setas laranja nos cantos** (`.carousel__seta`), que movem um item por clique. Pausa com o mouse em cima.

- **Depoimentos** (`#depoimentos`): movimento da esquerda para a direita. 10 avaliações copiadas do Perfil da Empresa no Google "MBV Fy AÇO Mob Móveis Industriais" (https://maps.google.com/?cid=6896572141785409282) em 14/11/2026; fotos dos clientes em `assets/img/avaliacoes/`. Texto cortado em 3 linhas com "…" e botão "… Leia mais", que abre o depoimento completo numa janela (`#review-modal`). Carrossel próprio, sem serviço pago (o Trustindex foi descartado porque cobra após 7 dias). Não se atualiza sozinho: para incluir uma avaliação nova, adicionar um `<figure class="review">` e a foto.
- **Inspiração** (`#lojas`): movimento para a direita, 6 fotos enviadas pelo dono em `assets/img/`.

## Antes e depois (`.compare`)

Comparador deslizante: a foto "depois" fica ao fundo e a "antes" é recortada até a barra. O controle é um `<input type="range">` invisível sobre a foto (mouse, toque e teclado), ligado em `main.js`. As duas fotos são quadradas (1024×1024). Hoje mostra um estoque (depósito).

## O que fabricamos (`#produtos`)

Só uma lista simples dos tipos de móveis com um botão de orçamento. Sem catálogo por decisão do dono (ver `PRODUCT.md`): nada de fichas, filtros ou páginas de produto sem pedido.

## Imagens

Todas as imagens ficam em `assets/img/` (copiadas do site antigo em 16/11/2026): primeira dobra `loja-bebidas.webp`, antes e depois `estoque-antes.webp` e `estoque-depois.webp` (1024×1024), ícones `favicon-32.png`, `favicon-192.png` e `apple-touch-icon.png`.

Exceção: a imagem de compartilhamento (`og:image` em `index.html`) ainda aponta para o WordPress, porque precisa de endereço completo com domínio. Quando o domínio estiver definido, colocar a foto em `public/` e trocar o link.
