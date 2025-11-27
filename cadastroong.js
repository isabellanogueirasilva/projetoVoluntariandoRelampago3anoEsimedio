function aplicarMascaraTelefone(valor) {
  valor = valor.replace(/\D/g, "");
  if (valor.length <= 10) {
    return valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else {
    return valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }
}

function aplicarMascaraCPF(valor) {
  valor = valor.replace(/\D/g, "");
  return valor
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function aplicarMascaraCNPJ(valor) {
  valor = valor.replace(/\D/g, "");
  return valor
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

document.addEventListener("input", function (e) {
  const input = e.target;

  if (input.id === "telefone") {
    input.value = aplicarMascaraTelefone(input.value);
  }

  if (input.id === "cpf") {
    input.value = aplicarMascaraCPF(input.value);
  }

  if (input.id === "cnpj") {
    input.value = aplicarMascaraCNPJ(input.value);
  }
});
