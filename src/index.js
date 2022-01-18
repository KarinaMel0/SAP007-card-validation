import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".numberCard").value;

  document.querySelector(".resultado").innerHTML = validator.isValid(pegaValor);
}

//pegando o valor do cartão e faz aparecer na tela
document.getElementById("botao").addEventListener("click", function () {
  let inputValor = document.getElementById("numeros5").value;
  document.getElementById("Teste").innerHTML = inputValor;
});
