const validator = {
  isValid(CardNumber) {
    let cardNumber = CardNumber.split("");
    let soma = 0;
    let isValid = false;
    let seParOuImpar = false; //variavel de controle, para multiplicarmos apenas os numeros nas posicoes pares
    //loop em for:

    cardNumber.reverse(); // Aqui estamos revertendo a array(numeros do cartão)
    //for(let variavel = 0; enquanto a variavel for menor que o tamanho do array rodar o codigo;  quanto terminar de rodar o codigo variavel incrementa)
    for (let contador = 0; contador < cardNumber.length; contador++) {
      //SE seParOuImpart for true, ele faz tudo que esta a baixo (significa que é pra multiplicar o numero por 2)
      if (seParOuImpar) {
        //SE seParOuImpart for true, ele faz tudo que esta a baixo (significa que é pra multiplicar o numero por 2)
        //atribuindo 0 ao multi dentro de um for, ele sempre vai resetar a cada loop
        let multi = 0;
        // != significa diferente de 0 ou qualquer outro numero que eu colocar depois.
        multi = cardNumber[contador] * 2;

        if (multi > 9) {
          let cortado = multi.toString().split(""); // toString() transforma alguma coisa em string, ex: ta convertando o multi em string pra no .split("") Ele corta uma string e transforma numa array, um EX: 15,42 depois do .toString().split(""): ['1','5','4','2'].

          soma = soma + parseInt(cortado[0]) + parseInt(cortado[1]);
        }
        /* o Parseint é para transformamos algo em um numero inteiro, quando separamos a string la em cima, obtemos um array assim:
          
          se o multi for 15 por exemplo, a variavel cortado fica assim:

          cortado = ['1','5']*/

        if (multi < 10) {
          soma = soma + multi;
        }
      }
      // Aqui esta verificando se a variavel *seParOuImpar* é falso, se for falso significa que estamos em um numero que esta na posição impar, daí entra no nosso if
      if (seParOuImpar == false) {
        soma = soma + parseInt(cardNumber[contador]);
      }
      seParOuImpar = !seParOuImpar;
    }

    if (soma % 10 == 0) {
      isValid = true;
    }
    return isValid;
  },

  maskify(isValid) {
    return isValid.replace(/.(?=.{4})/g, "#"); // /= começo do regex , . = qualquer caracter que vier antes do grupo é
  },
};

export default validator;
