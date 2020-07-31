let options = document.getElementById('state');
let arrayEstados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]

for (let i=0 ; i < arrayEstados.length ; i += 1){
    let option = document.createElement('option'); //<option value=0>acre</option>
    option.value=i;
    option.innerText=arrayEstados[i];
    options.appendChild(option);
}

let btn = document.getElementById('btn');
btn.onclick = verificaData();



function verificaData(){
 let dates = document.getElementById('date');
 dates.addEventListener('keyup' , verificaData);
 let cont=0;
 let minhaData = dates.value;
 let dia=parseInt(minhaData.substr(0,2));
 let mes=parseInt(minhaData.substr(3,2));
 let ano=parseInt(minhaData.substr(6,4));

 // dd / mm / aaaa
 // 01 2 34 5 6789

if ( dia < 0 || dia >= 31) {
    alert("erro de dia");
} 
 if ( mes < 0 || mes >= 12) {
    alert("erro de mês");
} 
 if (ano < 0){
    alert("erro de ano");
}

}

