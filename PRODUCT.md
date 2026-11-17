# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + Tailwind CSS, sempre nas últimas versões estáveis (decisão do dono em 16/11/2026, na instalação do Impeccable).

- **Vite**: servidor de desenvolvimento e build de produção (`npm run dev` / `npm run build`, saída em `dist/`). Projeto multipágina: `index.html` e `obrigado.html` como entradas.
- **Tailwind CSS** (linha 4.x): instalado pelo plugin oficial `@tailwindcss/vite`, com `@import "tailwindcss";` no CSS principal e as cores da marca como tokens em `@theme` (#121212, #FF7C01→#FF9901, #F7F7F7, #FFF, laranja de texto #a34d00).
- JavaScript puro (sem framework de componentes); WhatsApp, formulário FormSubmit, carrosséis e comparador continuam como estão em `main.js`.
- Migração feita em 16/11/2026 (Vite 8, Tailwind 4): visual mantido igual; o CSS original segue em `assets/css/style.css`, importado pelo `assets/css/main.css`, e é convertido para Tailwind aos poucos.

## Users

Empresários e gestores de comércio no estado do Rio de Janeiro (lojas, mercados, drogarias, autopeças, motopeças, varejo em geral) que estão montando, reformando ou ampliando uma loja ou um estoque. Chegam pela página vindos de anúncios do Google Ads, quase sempre pelo celular, e querem saber rápido se a MBVfY faz o móvel de que precisam e como pedir um orçamento.

## Product Purpose

Landing page da MBVfY Aço Mob, fábrica de móveis de aço para instalações comerciais. O único objetivo é gerar pedidos de orçamento. Sucesso = conversa iniciada no WhatsApp (canal por onde chega a maioria dos pedidos) ou formulário enviado (conversão medida na visita a `/obrigado.html`, evento `generate_lead`).

## Positioning

A MBVfY é a própria fábrica, não uma revenda: fabrica no próprio galpão, vai até a loja medir e projetar o espaço, entrega e monta. O cliente fala direto com quem fabrica (Kay e Rodrigo aparecem pelo nome nas avaliações).

## Operating Context

- Atendimento em todo o estado do RJ; sede em Duque de Caxias (Rua Numa Pompílio, 33 – Jardim Olavo Bilac).
- Fluxo comercial: o cliente conta o que precisa (WhatsApp) → a equipe indica os modelos → envia a proposta → fabrica, entrega e monta no prazo combinado.
- WhatsApp (21) 99652-9608 é o canal principal; o formulário envia por e-mail via FormSubmit.

## Capabilities and Constraints

- Produtos: balcões estilo industrial, balcões-vitrine, gôndolas, estantes e estantes industriais, estantes monta-carga, vitrines e expositores, checkouts, roupeiros e projetos sob medida.
- **Sem catálogo de produtos** por decisão do dono (ainda não formatado): nada de fichas, filtros ou páginas de produto sem pedido.
- Stack: Vite + Tailwind CSS (ver Stack); prioridade para carregamento rápido, celular primeiro e SEO básico.
- Hospedagem: Cloudflare Workers (site estático, pasta `dist/`). Em aberto: o domínio de publicação.

## Brand Commitments

- Nome sempre escrito **MBVfY Aço Mob**.
- Todo o conteúdo em português do Brasil, linguagem direta para o comerciante.
- Logo SVG inline (mbv / FY / AÇO / mob com cruz), com animação de entrada já definida.
- Títulos sem ponto final (pedido do dono).
- Frase do dono "Fabricamos o mobiliário para o seu negócio" abre o texto da primeira dobra.
- Seções alternando o fundo (escuro, claro, laranja, branco), padrão herdado da página original.

## Evidence on Hand

- 10 avaliações reais do Perfil da Empresa no Google, texto original sem edição, fotos em `assets/img/avaliacoes/`. Nunca inventar ou reescrever depoimentos.
- Fotos de antes e depois de um estoque (depósito) atendido; fotos de antes e depois de uma loja ainda vão ser enviadas pelo dono.
- As 6 fotos da galeria "Inspiração" (`assets/img/`) **não são trabalhos da MBVfY**: são referências. Nunca apresentá-las como clientes ou obras próprias.
- Não existem números de clientes atendidos, anos de mercado, certificações ou estudos de caso: não fabricar.

## Product Principles

1. Cada dobra leva a um pedido de orçamento, de preferência pelo WhatsApp.
2. Mostrar que é fábrica: medição, fabricação, entrega e montagem com quem faz.
3. Prova só com o que é real: avaliações do Google e fotos próprias.
4. Rápido e legível no celular de quem chegou por um anúncio.

## Accessibility & Inclusion

Contraste mínimo WCAG AA (texto escuro #121212 sobre laranja; laranja de texto #a34d00 sobre fundos claros). Controles como o comparador de antes e depois funcionam por mouse, toque e teclado.
