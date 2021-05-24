// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function numeroRepetido (array) {
  let numeroMaisRepetido = 0;
  let repetidaAtual = 0;
  let repetidaAnterior = 0;
  for (let i = 0; i < array.length; i += 1) {
    repetidaAtual = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        repetidaAtual += 1;
      }
    }
    if (repetidaAtual > repetidaAnterior) {
      repetidaAnterior = repetidaAtual;
      numeroMaisRepetido = array[i];
    }
  }
  return numeroMaisRepetido;
}

let x = numeroRepetido([2, 3, 2, 5, 8, 2, 3]);
console.log(x);
