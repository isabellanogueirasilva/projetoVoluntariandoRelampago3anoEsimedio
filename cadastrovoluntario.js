
const form = document.getElementById("signup-form");
const successMessage = document.getElementById("success-message");

const cpfInput = document.getElementById("cpf");
const phoneInput = document.getElementById("phone");


cpfInput.addEventListener("input", function () {
  let cpf = cpfInput.value.replace(/\D/g, "");

  if (cpf.length > 11) cpf = cpf.slice(0, 11);

  cpfInput.value = cpf
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});


phoneInput.addEventListener("input", function () {
  let tel = phoneInput.value.replace(/\D/g, "");

  if (tel.length > 11) tel = tel.slice(0, 11);

  if (tel.length <= 10) {

    phoneInput.value = tel
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  } else {

    phoneInput.value = tel
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
});

function mascaraData(input) {
    let valor = input.value.replace(/\D/g, ""); 

    if (valor.length > 2) {
        valor = valor.substring(0,2) + "/" + valor.substring(2);
    }
    if (valor.length > 5) {
        valor = valor.substring(0,5) + "/" + valor.substring(5,9);
    }

    input.value = valor;
}





function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  return cpf.length === 11;
}

function validarTelefone(tel) {
  tel = tel.replace(/\D/g, "");
  return tel.length >= 10 && tel.length <= 11;
}




form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("name").value.trim();
  const cpf = cpfInput.value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = phoneInput.value.trim();
  const nascimento = document.getElementById("birth").value;
  const habilidade = document.getElementById("skill").value.trim();

  if (nome === "") {
    alert("Por favor, preencha seu nome completo.");
    return;
  }

  if (!validarCPF(cpf)) {
    alert("Digite um CPF válido.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido.");
    return;
  }

  if (!validarTelefone(telefone)) {
    alert("Digite um telefone válido.");
    return;
  }

  if (nascimento === "") {
    alert("Selecione uma data de nascimento.");
    return;
  }

  if (habilidade === "") {
    alert("Informe sua habilidade.");
    return;
  }

  successMessage.classList.add("active");
  form.reset();

  setTimeout(() => {
    successMessage.classList.remove("active");
  }, 3000);
});
