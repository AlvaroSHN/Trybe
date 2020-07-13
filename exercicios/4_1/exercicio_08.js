//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.

let num1 = 13;
let num2 = 15;
let num3 = 5;

let resultado = false;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    resultado = true;
}
console.log(resultado);
