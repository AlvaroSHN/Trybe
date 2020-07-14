//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 90, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;

for (let i = 0 ; i < numbers.length ; i++){
    if (numbers[i] > resultado){
        resultado=numbers[i];
    }
 }
 
console.log(resultado)

