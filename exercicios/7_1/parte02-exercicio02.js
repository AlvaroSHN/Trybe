//Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = textMessage => {
  let separedWords = textMessage.split(' ');
  let compareLength = 0;
  let resultWord = '';

  for (let i = 0 ; i < separedWords.length ; i += 1) {
    if (separedWords[i].length > compareLength) {
      compareLength = separedWords[i].length;
      resultWord = separedWords[i];
    }
  }
  return resultWord;
}

let word = "Antônio foi no banheiro e não sabemos o que aconteceu";
console.log(longestWord(word));

