//Exercicio 1.5 Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
// Faça programas para: Modulo de a%b. o operador modulo retorna o resto da divisão.

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 10 + 1);

let restoDaDivisao = a % b;

console.log(`Dividendo = ${a}\nDivisor = ${b}\nResto da divisão = ${restoDaDivisao}`);

