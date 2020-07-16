//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function contarCaracter(arrayAnalise) {
    let maiorPalavra = arrayAnalise[0];
    for (let x in arrayAnalise) {
      if (maiorPalavra.length < arrayAnalise[x].length) {
        maiorPalavra = arrayAnalise[x];
      }
    }
    return maiorPalavra;
  }

  console.log(contarCaracter(arrayDeTeste));