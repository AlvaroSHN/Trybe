//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    //recorrente: "Sim"
  };
  info1.recorrente = "Sim"

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    //recorrente: "Sim"
  };
  info2.recorrente = "Sim"
  
    console.log(info1.personagem + " e " + info2.personagem)
    console.log(info1.origem + " e " + info2.origem)
    console.log(info1.nota + " e " + info2.nota)
                 
    if (info1.recorrente === "Sim" && info2.recorrente === "Sim"){
      console.log("Ambos recorrentes");
   }

