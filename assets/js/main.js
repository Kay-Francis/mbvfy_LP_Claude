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

// Filtro do catálogo
const chips = document.querySelectorAll(".chip");
const produtos = document.querySelectorAll(".product");
chips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    const filtro = chip.dataset.filter;
    chips.forEach(function (c) {
      const ativo = c === chip;
      c.classList.toggle("is-active", ativo);
      c.setAttribute("aria-pressed", String(ativo));
    });
    produtos.forEach(function (p) {
      p.hidden = filtro !== "todos" && p.dataset.cat !== filtro;
    });
  });
});

// Formulário: monta a mensagem e abre no WhatsApp
const form = document.getElementById("form-orcamento");
if (form) {
  const erro = form.querySelector(".form__error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const dados = new FormData(form);
    const obrigatorios = ["nome", "whatsapp", "mensagem"];
    let valido = true;
    obrigatorios.forEach(function (campo) {
      const el = form.elements[campo];
      const vazio = !String(dados.get(campo) || "").trim();
      el.setAttribute("aria-invalid", String(vazio));
      if (vazio) valido = false;
    });
    erro.hidden = valido;
    if (!valido) return;

    const linhas = [
      "Olá! Vim pelo site e quero um orçamento.",
      "",
      "*Nome:* " + dados.get("nome").trim(),
      "*WhatsApp:* " + dados.get("whatsapp").trim(),
    ];
    const comercio = String(dados.get("comercio") || "").trim();
    if (comercio) linhas.push("*Comércio:* " + comercio);
    linhas.push("*Preciso de:* " + dados.get("mensagem").trim());

    window.open(waLink(linhas.join("\n")), "_blank", "noopener");
  });
}

// Ano atual no rodapé
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
