//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.
//Bonus: use somente um if.

let num1 = 2;
let num2 = 4;
let num3 = 6;

let resultado = false;

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    resultado = true;
}
console.log(resultado);
