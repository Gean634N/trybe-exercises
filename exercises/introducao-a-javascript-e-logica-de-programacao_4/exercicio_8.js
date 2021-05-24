// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function menorDoArray (array) {
  let menor = 0;
  let indexMenor = 0;
  for (let valor = 0; valor < array.length; valor += 1) {
    if (array[valor] < menor) {
      menor = array[valor];
      indexMenor = valor;
    }
  }
  return indexMenor;
}

let x = menorDoArray([2, 4, 6, 7, 10, 0, -3]);

console.log(x);