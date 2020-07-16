//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let numero = 5;

function somaTotal(num) {
    let total = 0;
    for (let index = 1; index <= num; index++) {
      total = total + index;
    }
    return total;
  }
  console.log(somaTotal(numero)); 