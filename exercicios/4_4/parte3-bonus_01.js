//(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let numeroRomano = "IX"



function converterRomanos(numeroRomano){
    
    let tabelaDeNumeros = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let resultado=0;
    let arrayAuxiliar=[];

    for (let x in numeroRomano) {
        arrayAuxiliar[x] = tabelaDeNumeros[numeroRomano[x]];
        //console.log(arrayAuxiliar[x]);
      }

    for (let y in tabelaDeNumeros){
        console.log(tabelaDeNumeros[y]);
    }


}

converterRomanos(numeroRomano);

//todo...