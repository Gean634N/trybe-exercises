// Exercicio 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (const n of numbers) {
  sum += n; // calcula a soma dos numeros
}

console.log(sum / numbers.length); // imprime a soma dos numeros dividida pela quantidade de numeros