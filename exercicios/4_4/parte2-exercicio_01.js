//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palavra) {
    let letrasSeparadas = palavra.split("");
    let isPalindrome = true;
    for (let index in letrasSeparadas) {
      if (letrasSeparadas[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }

console.log(verificaPalindrome("arara")); 
console.log(verificaPalindrome("desenvolvimento")); 