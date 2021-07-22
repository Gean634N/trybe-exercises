// Exercicio 1.4 Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
// Faça programas para: Divide a/b.

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 10 + 1);

let quociente = a / b;

console.log(`Dividendo = ${a}\nDivisor = ${b}\nQuociente de a por b = ${quociente.toFixed(2)}`);
