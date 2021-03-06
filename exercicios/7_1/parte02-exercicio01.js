//Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.


const fatorial = num => {
  if (num > 0){
    let resultado = 1;
    for(let i = 1; i <= num ; i += 1){
      resultado *= i; 
    }
    return resultado;    
  }
};

console.log(fatorial(4));

const fatorialBonus = num => num > 1 ? num * fatorialBonus(num-1) : 1


