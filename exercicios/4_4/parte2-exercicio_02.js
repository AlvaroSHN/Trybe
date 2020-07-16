//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayDeTeste = [2, 3, 6, 7, 10, 1];

function maiorValor (arrayComparacao){
  let maiorIndice = 0;
  for (let x in arrayComparacao) {
    if (arrayComparacao[maiorIndice] < arrayComparacao[x]) {
        maiorIndice = x;
    }
  }
  return maiorIndice;
}

console.log(maiorValor(arrayDeTeste))