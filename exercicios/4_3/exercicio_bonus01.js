//bonus Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 7;
let resposta = '';
let simbolo = '*';
let espaco = ' ';
let vez = 0;

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
  if (vez==1 || vez==centro){
    console.log(resposta);
  } else {
      resposta = resposta.substr(0, centro-1) + espaco + resposta.substr(centro-1 + espaco.length);
      console.log(resposta);
    }
  vez=vez+1;
  resposta = '';
  direita--;
  esquerda++;
}