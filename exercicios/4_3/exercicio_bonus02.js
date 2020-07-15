//Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numero = 7;
let divisor;


for (let i = 2; i < numero && divisor != 1; i++) {
  divisor = 0;
  if (numero % i == 0){
    divisor = divisor + 1;
  } 
}

if (divisor == 0){
    console.log(numero + ' é primo');
} else {
    console.log(numero + ' não é primo');
}
