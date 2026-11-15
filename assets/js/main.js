// Número do WhatsApp da MBVfY Aço Mob (DDI + DDD + número, só dígitos)
const WHATSAPP = "5521996529608";

function waLink(texto) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
}

// Todos os links com data-wa abrem o WhatsApp com a mensagem já escrita
document.querySelectorAll("[data-wa]").forEach(function (a) {
  a.href = waLink(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});

// Formulário: envia os dados por e-mail usando o FormSubmit (formsubmit.co).
// No primeiro envio o FormSubmit manda um e-mail de ativação para este endereço;
// depois de ativar, dá para trocar o e-mail abaixo pelo código que ele fornece.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/mbvfyacomob@gmail.com";

const form = document.getElementById("form-orcamento");
if (form) {
  const erro = form.querySelector(".form__error");
  const botao = form.querySelector("button[type=submit]");

  function mostrarErro(texto) {
    erro.textContent = texto;
    erro.hidden = !texto;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const dados = new FormData(form);
    const valor = function (campo) { return String(dados.get(campo) || "").trim(); };

    let valido = true;
    ["nome", "whatsapp", "mensagem"].forEach(function (campo) {
      const vazio = !valor(campo);
      form.elements[campo].setAttribute("aria-invalid", String(vazio));
      if (vazio) valido = false;
    });
    const emailInvalido = valor("email") && !form.elements.email.checkValidity();
    form.elements.email.setAttribute("aria-invalid", String(Boolean(emailInvalido)));
    if (!valido) return mostrarErro("Preencha nome, WhatsApp e o que você precisa.");
    if (emailInvalido) return mostrarErro("Confira o e-mail digitado.");
    mostrarErro("");

    // Robô de spam preencheu o campo escondido: finge sucesso e não envia
    if (valor("_honey")) { window.location.href = "obrigado.html"; return; }

    const payload = {
      Nome: valor("nome"),
      WhatsApp: valor("whatsapp"),
      "E-mail": valor("email") || "(não informado)",
      "Tipo de comércio": valor("comercio") || "(não informado)",
      "O que precisa": valor("mensagem"),
      _subject: "Novo pedido de orçamento pelo site: " + valor("nome"),
      _template: "table",
      _captcha: "false",
    };
    if (valor("email")) payload._replyto = valor("email");

    botao.disabled = true;
    botao.textContent = "Enviando...";
    try {
      const resp = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await resp.json().catch(function () { return {}; });
      if (!resp.ok || String(json.success) !== "true") throw new Error(json.message || "Falha no envio");

      // Ponto para medir conversão do Google Ads (ativo quando a tag do Google estiver na página)
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { form: "orcamento" });
      // Vai para a página de obrigado (usada também como conversão no Google Ads)
      window.location.href = "obrigado.html";
    } catch (err) {
      mostrarErro("Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp: (21) 99652-9608.");
    } finally {
      botao.disabled = false;
      botao.textContent = "Enviar pedido de orçamento";
    }
  });
}

// Carrossel de depoimentos: repete os cartões até cobrir a tela e duplica o
// conjunto, para o movimento contínuo (esquerda → direita) não ter emendas.
document.querySelectorAll("[data-marquee]").forEach(function (track) {
  const originais = Array.from(track.children);
  if (!originais.length) return;
  const larguraConjunto = track.scrollWidth;
  const repeticoes = Math.max(1, Math.ceil(window.innerWidth / larguraConjunto));
  function clonar(lista) {
    lista.forEach(function (el) {
      const c = el.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      track.appendChild(c);
    });
  }
  for (let i = 1; i < repeticoes; i++) clonar(originais);
  clonar(Array.from(track.children)); // segunda metade idêntica

  // Movimento controlado por JS: anda sozinho para a direita e as setas
  // empurram um cartão para cada lado. Pausa com o mouse em cima.
  const marquee = track.closest(".marquee");
  const carousel = track.closest(".carousel");
  const VELOCIDADE = 40; // px por segundo
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const passo = function () {
    const card = track.children[0];
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
  };
  let metade = 0;
  let x = 0;          // posição atual
  let pendente = 0;   // deslocamento pedido pelas setas, aplicado aos poucos
  let pausado = false;
  let ultimo = performance.now();

  function medir() { metade = (track.scrollWidth + parseFloat(getComputedStyle(track).columnGap || 16)) / 2; }
  medir();
  x = -metade;
  window.addEventListener("resize", medir);

  function quadro(agora) {
    const dt = Math.min(0.05, (agora - ultimo) / 1000);
    ultimo = agora;
    if (!pausado && !semMovimento) x += VELOCIDADE * dt;
    if (pendente) {
      const mover = Math.abs(pendente) < 1 ? pendente : pendente * Math.min(1, dt * 10);
      x += mover;
      pendente -= mover;
    }
    // mantém x dentro de uma volta, para o loop não ter fim
    while (x > 0) x -= metade;
    while (x <= -metade) x += metade;
    track.style.transform = "translateX(" + x + "px)";
    requestAnimationFrame(quadro);
  }
  requestAnimationFrame(quadro);

  marquee.addEventListener("mouseenter", function () { pausado = true; });
  marquee.addEventListener("mouseleave", function () { pausado = false; });

  if (carousel) {
    const prev = carousel.querySelector(".carousel__seta--prev");
    const next = carousel.querySelector(".carousel__seta--next");
    if (prev) prev.addEventListener("click", function () { pendente += passo(); });
    if (next) next.addEventListener("click", function () { pendente -= passo(); });
  }
});

// Mostra "… Leia mais" só nos cartões cujo texto passou de 5 linhas.
// Mede depois que a fonte carrega, senão a contagem de linhas pode errar.
function marcarTextosCortados() {
  document.querySelectorAll(".marquee .review").forEach(function (card) {
    const texto = card.querySelector("blockquote");
    const botao = card.querySelector(".review__mais");
    if (!texto || !botao) return;
    const cortado = texto.scrollHeight > texto.clientHeight + 2;
    botao.hidden = !cortado;
    card.classList.toggle("is-cortado", cortado);
  });
}
marcarTextosCortados();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(marcarTextosCortados);

// Abre o depoimento completo numa janela ao clicar em "… Leia mais" ou no texto cortado
const modal = document.getElementById("review-modal");
if (modal && typeof modal.showModal === "function") {
  const conteudo = modal.querySelector(".review-modal__conteudo");
  document.addEventListener("click", function (e) {
    const alvo = e.target.closest(".review__mais, .review.is-cortado blockquote");
    if (!alvo) return;
    const card = alvo.closest(".review").cloneNode(true);
    card.removeAttribute("aria-hidden");
    conteudo.replaceChildren(card);
    modal.showModal();
  });
  modal.querySelector(".review-modal__fechar").addEventListener("click", function () { modal.close(); });
  // fecha ao clicar fora do cartão
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
}

// Ano atual no rodapé
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
