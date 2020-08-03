//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function inteiroRepetido(array){
    
let arrayAuxiliar=array;
let contador=0;
let numeros = [];

    for ( let x in array){
        for ( let y in array){
            if (arrayAuxiliar[x] === array[y]){
                numeros[contador] = array[y];
                console.log(contador, numeros);
                contador+=1;
                
            }
        }
    }

    }

//todo

inteiroRepetido(arrayTeste);