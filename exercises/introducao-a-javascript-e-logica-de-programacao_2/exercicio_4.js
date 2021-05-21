// Exercicio 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (const n of numbers) {
  sum += n; // calcula a soma dos numeros
}

if ((sum / numbers.length) > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}
console.log(sum / numbers.length); // imprime a soma dos numeros dividida pela quantidade de numeros
