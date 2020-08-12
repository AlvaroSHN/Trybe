//Crie uma função para listar os valores de um objeto. 
//Essa função deve receber um objeto como parâmetro.

//Crie uma função para mostrar o tamanho de um objeto.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const listObjects = (object) => Object.values(object);

console.log(listObjects(lesson3));
