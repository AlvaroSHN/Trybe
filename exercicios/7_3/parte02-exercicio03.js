//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greaterThanTen = (array) => {
  let results = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results += array[i];
    }
  }
  return results;
};
const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];