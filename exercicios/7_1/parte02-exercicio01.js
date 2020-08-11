//Crie uma função que receba um número e retorne seu fatorial.

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
//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

const fatorialBonus = num => num > 1 ? num * fatorialBonus(num-1) : 1


