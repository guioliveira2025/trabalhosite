document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function (e) {
e.preventDefault();

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const mensagem = document.getElementById("mensagem").value.trim();

if (nome === "" || email === "" || mensagem === "") {
alert("Preencha todos os campos!");
return;
}

const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailValido.test(email)) {
alert("Digite um email válido!");
return;
}

mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
form.reset();
});

});

/* Alternar tema */
function toggleTema() {
document.body.classList.toggle("dark");
}