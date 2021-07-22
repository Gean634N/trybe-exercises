// Exercicio 2 Parte II - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorDoArray (array) {
  let maior = 0;
  let indexMaior = 0;
  for (let valor = 0; valor < array.length; valor += 1) {
    if (array[valor] > maior) {
      maior = array[valor];
      indexMaior = valor;
    }
  }
  return indexMaior;
}

let x = maiorDoArray([2, 3, 6, 7, 10, 1]);

console.log(x);