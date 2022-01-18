const validator = {
  isValid(CardNumber) {
    let cardNumber = CardNumber.split("");
    let soma = 0;
    let isValid = false;

    for (let contador = 0; contador < cardNumber.length; contador++) {
      if (contador % 2 != 0 && contador > 0) {
        let multi = 0;

        multi = cardNumber[contador] * 2;

        if (multi > 9) {
          let cortado = multi.toString().split("");

          soma = soma + parseInt(cortado[0]) + parseInt(cortado[1]);
        }

        if (multi < 10) {
          soma = soma + multi;
        }
      }

      if (contador % 2 == 0 || contador == 0) {
        soma = soma + parseInt(cardNumber[contador]);
      }
    }
    if (soma % 10 == 0) {
      isValid = true;
    }
    return isValid;
  },
};

export default validator;
