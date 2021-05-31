// Exercicio 5 Parte II - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function numeroMaisRepetido (array) {
  let numeroMaisRepetido = 0;
  let maisRepetidoAtual = 0;
  let maisRepetidoAnterior = 0;

  for (let i = 0; i < array.length; i += 1) {
    maisRepetidoAtual = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        maisRepetidoAtual += 1;
      }
    }
    if (maisRepetidoAtual > maisRepetidoAnterior) {
      maisRepetidoAnterior = maisRepetidoAtual;
      numeroMaisRepetido = array[i];
    }
  }
  
  return numeroMaisRepetido;
}

let numero = numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3]);
console.log(numero);
