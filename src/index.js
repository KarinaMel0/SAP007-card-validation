import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".numberCard").value;

  document.querySelector(".resultado").innerHTML = validator.isValid(pegaValor);
}
