// Exercicio 3 Faça um programa que retorne o maior de três números.
// Defina no começo do programa três variáveis com os valores que serão comparados.

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

console.log(`Primeiro numero = ${a}\nSegundo numero = ${b}\nTerceiro numero = ${c}`);

if (a > b && a > c) {
  console.log(`O maior dos três numeros é o numero ${a}`);
}
else if (b > a && b > c) {
  console.log(`O maior dos três numeros é o numero ${b}`);
}
else {
  console.log(`O maior dos três numeros é o numero ${c}`);

}