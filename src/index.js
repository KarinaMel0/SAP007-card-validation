import validator from "./validator.js";

document.querySelector(".btn").addEventListener("click", Documentos);

function Documentos() {
  const nomePegaValor = document.querySelector("#nome").value;
  const pegaValor = document.querySelector("#numeros5").value;
  const pegaData = document.getElementById("data-Cartao").value;
  const pegaCvv = document.querySelector("#valor-CVV").value; //Criação das const(poderia ser uma let) para pegar o valor dos documentos no HTML e trazer para o JS, podendo ser usado para contas(como validator) ou aparecer na tela.

  if (nomePegaValor.length < 3) {
    alert("Preencha todos os campos corretamente."); // Se o nomePegaValor for menor 3, da o Alert.
    return;
  }

  let RetornoIsvalid = validator.isValid(pegaValor); // A variavel RetornoIsvalid, pega o valor do isvalid e diz se ele é invalido ou valido, substituindo o false e true.
  if (RetornoIsvalid) {
    RetornoIsvalid = "Cartão Valido";
  } else {
    //só tem if e else pq é um valor booleano e valores booleanos só tem dois tipos, ou é false ou é true
    RetornoIsvalid = "Coloque um cartão valido";
  }

  document.querySelector(".resultado").innerHTML = RetornoIsvalid;
  document.getElementById("Teste").innerHTML = validator
    .maskify(pegaValor)
    .replace(/([#]{4})([#]{4})([#]{4})([0-9]{4})/, "$1-$2-$3-$4"); //A função .replace recebe como parâmetros o padrão que estamos procurando e como segundo parâmetro o que queremos colocar no lugar. /-signifca o final ou começo
  document.querySelector(".nomeUsuario").innerHTML = nomePegaValor;
  document.querySelector("#valor-Data").innerHTML = pegaData;
  document.querySelector(".valorDoCvv").innerHTML = pegaCvv; // O innerHTML pega o valor do input e joga pra dentro do <H1> ou <P> por exemplo.
}
// não da pra usar .innerHTML no input(.numberCard), pq input é uma tag que fechea nela mesma (<input/>).

const arrayDocumentos = document.querySelectorAll(".noScroll");
//O .noScroll é uma array de classes, pois tanto a section 1 como 2 tem a classe .noScroll

for (let contador = 0; contador < arrayDocumentos.length; contador++) {
  arrayDocumentos[contador].addEventListener("wheel", function (e) {
    e.preventDefault();
  }); //preventDefault(), tira a função padrão do evento, ex: wheel(rodinha do mouse), desabilita e faz com que o usuario não consiga descer a pagina enquanto não clicar no botão principal.
}
function bandeirasCartao(cardNum) {
  if (/^4/.test(cardNum)) {
    return "visa";
  } else if (/^55/.test(cardNum)) {
    return "mastercard";
  } else if (/^37|^34/.test(cardNum)) {
    return "amex"; // não pode terminar em apenas else pq não vai verifica
  }
}

document.querySelector("#numeros5").addEventListener("keyup", () => {
  const valorInput = document.querySelector("#numeros5").value;
  const bandeira = bandeirasCartao(valorInput);
  //!= significa diferente de undefined, ele entra no if
  if (bandeira != undefined) {
    document.getElementById("bandeiras").src = "./" + bandeira + ".svg";
  } else {
    document.getElementById("bandeiras").src = "";
  }
});
