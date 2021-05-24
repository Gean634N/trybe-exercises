// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for (const n of numbers) {
  if (n < menorValor) {
    menorValor = n;
  }
}

console.log(`O menor valor do array é ${menorValor}`);