//Agora inverta o lado do triângulo.

let n = 5;
let simbolo = '*';
let espaco = ' ';
let resposta = '';
let posicao = n;

    for (let i = 0 ; i < n ; i += 1){
        for (let j=0 ; j <=n ; j += 1){
            if ( j < posicao ){
                resposta += espaco;
            } else {
                resposta += simbolo;
            }
        }
    
    console.log(resposta);
    resposta = '';
    posicao-= 1;
    }

