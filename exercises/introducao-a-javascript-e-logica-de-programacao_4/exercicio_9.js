// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maiorDoArray (array) {
  let maior = [];
  for (let valor = 0; valor < array.length; valor += 1) {
    if (array[valor].length > maior.length) {
      maior = array[valor];
    }
  }
  return maior;
}

let x = maiorDoArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

console.log(x);