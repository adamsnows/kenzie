//criar uma função que recebera um array de strings
//objetivo será encontrar todas as palavras de tamanho par
//substituir todas as letras '' i '' por '' ! ''
//retornar 1 nova array somente com as palavras q foram trocadas
const arrayTeste = ["biscoito", "churiço", "mussarela", "ibisco", "paçoca", "hamburguer"];

function newWords(frase) {
  let newArray = []
  for (let i = 0; i < frase.length; i++) {
    if (frase[i].length % 2 == 0) {
      newArray.push(frase[i])
    }
  }
  let regex = /i/gi
  newArray = newArray.join(' ').replace(regex, '!').split(' ')
  /*   let arrayResult = []
    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray[i].length; j++) {
        if (newArray[i][j] == '!') {
          arrayResult.push(newArray[i])
        }
      }
    } */
  return newArray
}
console.log(newWords(arrayTeste))