//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];

function menorValor (arrayComparacao){
  let menorIndice = 0;
  for (let x in arrayComparacao) {
    if (arrayComparacao[menorIndice] > arrayComparacao[x]) {
        menorIndice = x;
    }
  }
  return menorIndice;
}

console.log(menorValor(arrayDeTeste))