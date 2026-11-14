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
  const sucesso = document.getElementById("form-sucesso");

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
    if (valor("_honey")) { form.hidden = true; sucesso.hidden = false; return; }

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

      form.hidden = true;
      sucesso.hidden = false;
      sucesso.focus();
      // Ponto para medir conversão do Google Ads (ativo quando a tag do Google estiver na página)
      if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { form: "orcamento" });
    } catch (err) {
      mostrarErro("Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp: (21) 99652-9608.");
    } finally {
      botao.disabled = false;
      botao.textContent = "Enviar pedido de orçamento";
    }
  });
}

// Ano atual no rodapé
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
