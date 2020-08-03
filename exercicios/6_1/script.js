let options = document.getElementById('state');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

let dataTeste = document.getElementById('date').DatePickerX.init();

let arrayEstados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]

for (let i=0 ; i < arrayEstados.length ; i += 1){
    let option = document.createElement('option'); 
    option.value=i;
    option.innerText=arrayEstados[i];
    options.appendChild(option);
}

//obs: voltar com os required no html
// let btn2 = document.getElementById('btn2');
// btn2.addEventListener('change' , preventDef);
// function preventDef(event) {
//     event.preventDefault();
//   }

// let dates = document.getElementById('date');
// dates.addEventListener('change' , verificaData);


// function verificaData(){
 
//  let minhaData = dates.value;
//  let dia=parseInt(minhaData.substr(0,2));
//  let mes=parseInt(minhaData.substr(3,2));
//  let ano=parseInt(minhaData.substr(6,4));

//   if ( dia < 0 || dia > 31) {
//     dates.value="";
//     alert("erro de dia");   
//     } 
//   if ( mes < 0 || mes > 12) {
//     alert("erro de mês");
//     dates.value="";
//    }
//   if (ano < 0){
//     alert("erro de ano");
//     dates.value="";
//    }
// }

