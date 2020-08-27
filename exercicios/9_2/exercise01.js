//  Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. 
//  Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
//  Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. 
//  Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.



const myFunctionPromisse = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = [];
    for (let index = 0; index < 10; index += 1 ) {
      myArray.push(Math.floor(Math.random() * 50) + 1);
    }
    const sumSquaredArray = myArray.map(value => value * value).reduce((acc,value) => acc + value , 0);
    (sumSquaredArray < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('It works!'))
    .catch(() => console.log('Fail!'));
};

myFunctionPromisse();