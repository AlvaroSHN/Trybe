//Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três variáveis com os 
//valores que serão comparados.


let num1 = 40;
let num2 = 50;
let num3 = 30;

if (num1 > num2 && num1 > num3)  {
    console.log('O maior número é ' +num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log('O maior número é ' +num2);
  } else {
    console.log('O maior número é ' +num3);
  }