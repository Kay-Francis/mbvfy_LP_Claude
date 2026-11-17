# Padrões do projeto

Regras que exigem julgamento e que o `/code-review` confere em cada mudança. Regras mecânicas, que uma ferramenta consegue checar sozinha, devem virar checagem automática (hook, lint ou CI) em vez de ficar aqui.

## Conteúdo e texto

- Todo o conteúdo em **português do Brasil**, linguagem direta para o comerciante.
- Marca escrita sempre **MBVfY Aço Mob**.
- Títulos (h1, h2, h3) **sem ponto final** (pedido do dono: o ponto dá ideia de assunto encerrado). Pontuação interna, "!" e "?" continuam.
- Sem frases pequenas em caixa alta acima dos títulos das seções (removidas a pedido do dono em 15/11/2026). Só "O problema…" e "Mais frente de exposição…" ficaram, por fazerem parte da frase do título.
- A frase do dono "Fabricamos o mobiliário para o seu negócio" abre o texto da primeira dobra, em destaque laranja (`.lead__destaque`), não como etiqueta acima do título.
- Toda dobra leva a um pedido de orçamento, de preferência pelo WhatsApp.

## Provas e fotos

- **Depoimentos:** só avaliações reais do Perfil da Empresa no Google, com o texto original sem edição. Nunca inventar, resumir ou reescrever.
- **Galeria Inspiração:** as fotos são referências, não lojas mobiliadas pela MBVfY. Nunca apresentá-las como trabalho ou cliente da MBVfY, e também não marcá-las como "imagens ilustrativas" (pedido do dono): os textos ao redor ficam neutros.
- Nada de números de clientes, anos de mercado, certificações ou estudos de caso que não existam.

## Visual

Até existir o `DESIGN.md` (gerado com `/impeccable document`), estas são as regras visuais:

- **Cores alternadas por dobra** (padrão da página original, pedido do dono): cada `<section>` usa uma classe de tema: `s-dark` (#121212), `s-orange` (degradê #FF7C01→#FF9901), `s-light` (#F7F7F7) ou `s-white` (#FFF). Nunca duas dobras seguidas com o mesmo fundo. Ordem atual: escuro → claro → laranja → branco → escuro → claro → escuro (depoimentos) → laranja → branco → escuro.
- **Contraste mínimo WCAG AA:** nas seções laranja o texto é escuro (#121212); nos fundos claros o laranja de texto é #a34d00.
- **Cartões de depoimento:** pequenos, baixos e todos do mesmo tamanho (250×196px), fundo escuro e borda clara (pedido do dono).
- **Fotos da Inspiração:** quadros iguais de 380×260px; fotos com moldura branca levam a classe `img--framed`.
- Celular primeiro: tudo precisa funcionar e ficar legível em tela pequena.

## Código

- Seção nova usa classes do Tailwind e os tokens da marca de `assets/css/main.css` (`bg-escuro`, `text-laranja-texto`…). Não acrescentar regras novas ao `assets/css/style.css`; ao mexer numa parte dele, a conversão para Tailwind é bem-vinda desde que o visual não mude.
- Não reativar o preflight do Tailwind sem revisar o site inteiro (ver [ADR 0001](docs/adr/0001-vite-tailwind-sem-preflight.md)).
- JavaScript puro em `assets/js/main.js`, sem framework nem biblioteca nova sem motivo forte.
- Controles interativos funcionam com mouse, toque e teclado, e respeitam `prefers-reduced-motion`.
- Imagens com `width`, `height` e `alt`; `loading="lazy"` fora da primeira dobra.
- Prioridades: carregamento rápido, layout responsivo, SEO básico e chamadas claras para orçamento.
- Ao mudar o logo, alterar em `index.html` e `obrigado.html`.
