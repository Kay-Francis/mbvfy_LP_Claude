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
- Objetivo principal da página: gerar pedidos de orçamento pelo WhatsApp.
- Stack: site estático, sem build — `index.html`, `assets/css/style.css`, `assets/js/main.js`.
- WhatsApp: número único na constante `WHATSAPP` em `assets/js/main.js`. Todo link com `data-wa="mensagem"` vira link do WhatsApp com a mensagem pronta. O formulário não envia e-mail: monta a mensagem e abre no WhatsApp.
- **Sem catálogo de produtos por enquanto** (decisão do dono: o catálogo ainda não está formatado). A seção "O que fabricamos" (`#produtos`) é só uma lista simples dos tipos de móveis com um botão de orçamento. Não criar fichas de produto, filtros ou páginas de catálogo sem pedido.
- Galeria "Inspiração" (`#lojas`): fotos enviadas pelo dono em `assets/img/`. **Não são lojas mobiliadas pela MBVfY** — são referências. Nunca apresentar essas fotos como trabalhos/clientes da MBVfY, mas também **não** marcar como "imagens ilustrativas" (pedido do dono): textos ao redor devem ser neutros. Fotos com moldura branca levam a classe `img--framed` (amplia para cortar a borda).
- Demais imagens (hero, antes/depois): por enquanto vêm do site antigo (`mbvfyacomob.com.br/wp-content/uploads/...`). Antes de desligar o WordPress, copiar para `assets/img/` e trocar os links.
- Hospedagem e publicação: **a definir**.

## Rodar localmente

Abrir com um servidor estático (não via `file://`, senão o CSS/JS relativos podem não carregar). Neste PC não há Python nem Node; a sessão usou um servidor PowerShell temporário configurado em `.claude/launch.json` (não versionado).

## Regras de trabalho

- Responder e escrever todo o conteúdo do site em **português do Brasil**.
- Nome da marca escrito sempre como **MBVfY Aço Mob**.
- Priorizar: carregamento rápido, layout responsivo (celular primeiro), SEO básico e chamadas claras para orçamento.
- Repositório: https://github.com/Kay-Francis/mbvfy_LP_Claude (branch `main`).
