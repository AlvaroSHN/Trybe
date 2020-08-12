//Crie um código JavaScript com a seguinte especificação:
//Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
//Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
//Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const globalArray = ["HTML", "CSS", "JavaScript", "React", "NodeJS"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} , aqui! Tudo bem?`
    )
    
    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    globalArray.forEach((skill, index) =>
    result = `${result} - ${skill}`)
    result = `${result}
    #goTrybe`

    return result
}

console.log(buildSkillsPhrase('Alvaro'));