//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let custoProduto = 150;
let valorVenda = 180;
let imposto = 0.2;
let produtos = 1000;
let lucro;

if (custoProduto !== 0 && valorVenda !== 0) {
  lucro = (valorVenda - custoProduto) * produtos * imposto;
  console.log(lucro);
} else {
  console.log('Erro: um dos valores de entrada é menor que zero');
}