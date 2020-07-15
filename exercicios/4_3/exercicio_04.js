//Faça uma pirâmide com n asteriscos de base:

let n = 5;
let resposta = '';
let simbolo = '*';
let espaco = ' ';

let centro = (n + 1) / 2;
let esquerda = centro;
let direita= centro;

for (let i = 0; i <= centro; i++) {
  for (let j = 1; j <= n; j++) {
    if (j > direita && j < esquerda) {
        resposta += simbolo;
    } else {
        resposta += espaco;
    }
  }
  console.log(resposta);
  resposta = '';
  direita--;
  esquerda++;
}