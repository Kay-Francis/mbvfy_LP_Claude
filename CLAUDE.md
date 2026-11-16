# CLAUDE.md

## Sobre o negócio

**MBVfY Aço Mob** é uma fábrica de móveis de aço focada em instalações comerciais para empresas, com prioridade para o comércio (lojas, mercados, varejo).

Linha de produtos:
- Balcões estilo industrial
- Gôndolas
- Estantes e estantes estilo industrial
- Checkouts
- Roupeiros
- Outros móveis de aço sob medida para ambientes comerciais

Público-alvo: empresários e gestores de comércio que estão montando, reformando ou expandindo lojas.

## Sobre o projeto

Migração da landing page atual da MBVfY (feita em WordPress/Elementor) para um projeto próprio neste repositório, **com melhorias importantes** em relação à versão original.

- A LP original serve de referência de conteúdo (textos, produtos, fotos, contatos), não de código: não copiar a estrutura do Elementor.
- Objetivo principal da página: gerar pedidos de orçamento (a página é usada em anúncios do Google Ads).
- Formulário: envia por e-mail para **mbvfyacomob@gmail.com** via FormSubmit (`FORM_ENDPOINT` em `assets/js/main.js`). Campos: nome, WhatsApp, e-mail, tipo de comércio, o que precisa (+ campo-armadilha `_honey` contra spam). Após o envio dispara o evento `generate_lead` (se a tag do Google `gtag` estiver instalada) e redireciona para `obrigado.html` — página de agradecimento (noindex) usada como conversão no Google Ads.
- Stack: site estático, sem build — `index.html`, `assets/css/style.css`, `assets/js/main.js`.
- WhatsApp: número único na constante `WHATSAPP` em `assets/js/main.js`. Todo link com `data-wa="mensagem"` vira link do WhatsApp com a mensagem pronta.- **Sem catálogo de produtos por enquanto** (decisão do dono: o catálogo ainda não está formatado). A seção "O que fabricamos" (`#produtos`) é só uma lista simples dos tipos de móveis com um botão de orçamento. Não criar fichas de produto, filtros ou páginas de catálogo sem pedido.
- Galeria "Inspiração" (`#lojas`): carrossel em movimento para a direita (mesmo `[data-marquee]` + setas dos depoimentos), 6 fotos em quadros iguais (380×260px). Fotos enviadas pelo dono em `assets/img/`. **Não são lojas mobiliadas pela MBVfY** — são referências. Nunca apresentar essas fotos como trabalhos/clientes da MBVfY, mas também **não** marcar como "imagens ilustrativas" (pedido do dono): textos ao redor devem ser neutros. Fotos com moldura branca levam a classe `img--framed` (amplia para cortar a borda).
- Antes e depois: **comparador deslizante** (`.compare`): foto "depois" ao fundo e "antes" recortada até a barra; o controle é um `<input type="range">` invisível sobre a foto (mouse, toque e teclado), ligado em `main.js`. As duas fotos são quadradas (1024×1024).
- Demais imagens (hero, antes/depois): por enquanto vêm do site antigo (`mbvfyacomob.com.br/wp-content/uploads/...`). Antes de desligar o WordPress, copiar para `assets/img/` e trocar os links.
- Hospedagem e publicação: **a definir**.

## Logo

O logo do topo (`index.html` e `obrigado.html`) é um **SVG inline** recriado a partir da imagem original: textos "mbv" (laranja), "FY" (branco), "AÇO" (branco fino), "mob" (laranja) e a cruz branca, cada peça com a classe `lp-*`. Animação de entrada (`.logo-anim.is-anim` em `style.css`, disparada pelo `main.js`): a cruz se desenha e as quatro palavras chegam de lados diferentes (esquerda, cima, baixo, direita) e se encontram; repete ao passar o mouse. Tamanho: 140px de largura (116px no celular). Se mudar o logo, alterar nos dois arquivos.

## Checagens de design (Impeccable)

O Impeccable (skill pessoal em `~/.claude/skills/impeccable`) roda sozinho após cada edição de HTML/CSS/JS e no fim de cada tarefa (hooks em `~/.claude/settings.json`, configuração do projeto em `.impeccable/config.json`). Contraste mínimo WCAG AA: nas seções laranja o texto é escuro (#121212); nos fundos claros o laranja de texto é #a34d00. A frase do dono "Fabricamos o mobiliário para o seu negócio" abre o texto da primeira dobra, em destaque laranja (`.lead__destaque`), não como etiqueta acima do título; nenhuma exceção do Impeccable registrada. Não usar frases pequenas em caixa alta acima dos títulos das seções (removidas a pedido do dono em 15/11/2026); só "O problema…" e "Mais frente de exposição…" ficaram, por fazerem parte da frase do título.

## Cache dos arquivos

Os links para `style.css` e `main.js` em `index.html` e `obrigado.html` levam `?v=AAAAMMDDx`. **Sempre que mudar CSS ou JS, trocar esse número nos dois arquivos**, senão o navegador do visitante pode continuar mostrando a versão antiga (já aconteceu: o dono viu a galeria velha em vez do carrossel).

## Pendências (atualizado em 14/11/2026)

- [ ] **Ativar o formulário:** o dono precisa fazer um envio de teste e clicar em "Activate Form" no e-mail do FormSubmit em mbvfyacomob@gmail.com. Até lá, os pedidos não chegam.
- [ ] **Revisar a copy:** o dono vai revisar os textos. Dois pontos levantados: passo 01 de "Como funciona" fala só em WhatsApp; e-mail exibido (contato@mbvfyacomob.com.br) é diferente do que recebe o formulário (mbvfyacomob@gmail.com).
- [ ] **Imagens do site antigo:** foto da primeira dobra, fotos do antes/depois e favicon ainda vêm de `mbvfyacomob.com.br/wp-content/...`. Copiar para `assets/img/` antes de desligar o WordPress.
- [ ] **Publicar:** escolher hospedagem (GitHub Pages ou Cloudflare Pages) e apontar o domínio.
- [ ] **Google Ads:** instalar a tag do Google e configurar conversão na visita a `/obrigado.html` (o evento `generate_lead` já é disparado).

## Rodar localmente

Abrir com um servidor estático (não via `file://`, senão o CSS/JS relativos podem não carregar). Neste PC não há Python nem Node; a sessão usou um servidor PowerShell temporário configurado em `.claude/launch.json` (não versionado).

## Regras de trabalho

- Responder e escrever todo o conteúdo do site em **português do Brasil**.
- Nome da marca escrito sempre como **MBVfY Aço Mob**.
- Títulos (h1, h2, h3) **sem ponto final** (pedido do dono: o ponto dá ideia de assunto encerrado). Pontuação interna, "!" e "?" continuam.
- **Depoimentos** (`#depoimentos`): carrossel próprio (sem serviço pago — o Trustindex foi descartado porque cobra após 7 dias). 10 avaliações copiadas do Perfil da Empresa no Google "MBV Fy AÇO Mob Móveis Industriais" (https://maps.google.com/?cid=6896572141785409282) em 14/11/2026, com o **texto original sem edição**; fotos dos clientes em `assets/img/avaliacoes/`. Cartões pequenos, baixos e **todos do mesmo tamanho** (250×196px), fundo escuro e borda clara (pedido do dono); texto cortado em 3 linhas com "…" e botão "… Leia mais" que abre o depoimento completo numa janela (`#review-modal`). Movimento contínuo da esquerda para a direita controlado por JS (`[data-marquee]` em `main.js`, que duplica os cartões), com **setas laranja nos cantos** (`.carousel__seta`) que movem um cartão por clique; pausa com o mouse em cima. Não se atualiza sozinho: para incluir avaliação nova, adicionar um `<figure class="review">` e a foto. Nunca inventar ou reescrever depoimentos.
- **Cores alternadas por dobra** (padrão da LP original, pedido do dono): cada `<section>` usa uma classe de tema — `s-dark` (#121212), `s-orange` (degradê #FF7C01→#FF9901), `s-light` (#F7F7F7) ou `s-white` (#FFF). Ordem atual: escuro → claro → laranja → branco → escuro → claro → escuro (depoimentos) → laranja → branco → escuro. Ao criar seção nova, manter a alternância (nunca duas seguidas com o mesmo fundo).
- Priorizar: carregamento rápido, layout responsivo (celular primeiro), SEO básico e chamadas claras para orçamento.
- Repositório: https://github.com/Kay-Francis/mbvfy_LP_Claude (branch `main`).
