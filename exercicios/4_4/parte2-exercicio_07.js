//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let valorTeste1 = 'trybe';
let valorTeste2 = 'be';

function verificaFimPalavra (p1,p2) {
    p1 = p1.split("");
    p2 = p2.split("");
    retorno = true;

    for (let i = 0; i < p2.length; i++) {
      if (p1[p1.length-p2.length+i] != p2[i]) {
        retorno = false;
      }
    }
    return retorno;
  }

 console.log(verificaFimPalavra(valorTeste1, valorTeste2));