# Vite + Tailwind CSS, com o Tailwind sem preflight

Em 16/11/2026 o site estático (HTML, CSS e JS sem build) passou para Vite + Tailwind CSS nas últimas versões, por decisão do dono na instalação do Impeccable. Para não mudar o visual já aprovado, o Tailwind entra sem o preflight (o reset de estilos do navegador) e o CSS original (`assets/css/style.css`) fica inteiro na camada `components`, abaixo das classes utilitárias. Seções novas usam Tailwind e o CSS antigo é convertido aos poucos.

## Consequências

- Ligar o preflight depois muda links, listas, botões e títulos em toda a página: só fazer com revisão visual completa.
- O site publicado passa a ser a pasta `dist/` gerada pelo `npm run build`, e o `?v=` nos links deixou de ser necessário.
