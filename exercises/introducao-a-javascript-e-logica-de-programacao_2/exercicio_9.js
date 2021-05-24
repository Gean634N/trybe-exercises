// Exercicio 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];

for (let i = 1; i <= 25; i += 1) { // criando o array
  numbers.push(i)
}

for(let n of numbers) {
  console.log(n / 2);
}
