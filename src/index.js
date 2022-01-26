import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  let nomePegaValor = document.querySelector("#nome").value;
  let pegaValor = document.querySelector("#numeros5").value;
  let pegaData = document.getElementById("data-Cartao").value;
  let pegaCvv = document.querySelector("#valor-CVV").value;
  document.querySelector(".resultado").innerHTML = validator.isValid(pegaValor);
  document.getElementById("Teste").innerHTML = validator.maskify(pegaValor);
  document.querySelector(".nomeUsuario").innerHTML = nomePegaValor;
  document.querySelector("#valor-Data").innerHTML = pegaData;
  document.querySelector(".valorDoCvv").innerHTML = pegaCvv;
}
// não da pra usar .innerHTML no input(.numberCard), pq input é uma tag que fechea nela mesma (<input/>).

const arrayDocumentos = document.querySelectorAll(".noScroll");

for (let contador = 0; contador < arrayDocumentos.length; contador++) {
  arrayDocumentos[contador].addEventListener("wheel", function (e) {
    e.preventDefault();
  });
}

document.querySelector("#numeros5").addEventListener("keyup", () => {
  const valorInput = document.querySelector("#numeros5").value;

  const bandeira = bandeirasCartao(valorInput);

  if (bandeira != undefined) {
    document.getElementById("bandeiras").src = "./" + bandeira + ".svg";
  } else {
    document.getElementById("bandeiras").src = "";
  }
});

function bandeirasCartao(cardNum) {
  if (/^4/.test(cardNum)) {
    return "visa";
  } else if (/^55/.test(cardNum)) {
    return "mastercard";
  } else if (/^37/.test(cardNum)) {
    return "amex";
  }
}
