//  Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
//  Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
//  Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const myFunctionPromisse = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = [];
    for (let index = 0; index < 10; index += 1 ) {
      myArray.push(Math.floor(Math.random() * 50) + 1);
    }
    const sumSquaredArray = myArray.map(value => value * value).reduce((acc,value) => acc + value , 0);
    (sumSquaredArray < 8000) ? resolve(sumSquaredArray) : reject();
  });

  const divisionArray = [2, 3, 5, 10]; 
  
  myPromise
    .then(value => {
      //resultado da divisão desse número por 2, 3, 5 e 10 em um array.
      const resultDivisionArray = divisionArray.map(number => value/number)
      console.log('Array contendo as divisões:', resultDivisionArray);
      return resultDivisionArray;
    })
    .then(value => {
      // encadeie nela uma segunda Promise que some os elementos do array.
      const resultSumDivisionArray =  value.reduce((acc,val) => acc + val , 0)
      console.log('Soma das divisões do array:', resultSumDivisionArray);
      return resultSumDivisionArray;
    })
    //imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!!'));
};

myFunctionPromisse();