import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let pegaValor = document.querySelector(".numberCard").value;
  document.querySelector(".resultado").innerHTML = validator.isValid(pegaValor);
  document.getElementById("Teste").innerHTML = validator.maskify(pegaValor);
}
// não da pra usar .innerHTML no input(.numberCard), pq input é uma tag que fechea nela mesma (<input/>).
