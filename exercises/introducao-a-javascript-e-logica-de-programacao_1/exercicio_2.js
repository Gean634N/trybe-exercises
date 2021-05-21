// Exercicio 2 Faça um programa que retorne o maior de dois números.
// Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

console.log(`Primeiro numero = ${a}\nSegundo numero = ${b}`);

if (a > b) {
  console.log(`O maior dos dois numeros é o numero ${a}`);
}

else{
  console.log(`O maior dos dois numeros é o numero ${b}`);
}
