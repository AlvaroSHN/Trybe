//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greetings = [];

  for (const person in people) {
    //greeting += people[person];
    greetings.push(greeting + people[person]);
  }
  //return greeting;
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

//console.log(greetPeople(parameter));
assert.equal(typeof greetPeople, 'function');
assert.deepEqual(greetPeople(parameter), result, 'Array esperado deveria conter "Hello + nome"');
//era para retornar array, não string
//refatoração