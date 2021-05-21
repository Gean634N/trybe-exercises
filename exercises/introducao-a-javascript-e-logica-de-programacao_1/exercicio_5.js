// Exercicio 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = -10 + (Math.floor(Math.random() * 170));
let anguloB = -10 + (Math.floor(Math.random() * 170));
let anguloC = -10 + (Math.floor(Math.random() * 170));

console.log(`Angulo a = ${anguloA}º\nAngulo b = ${anguloB}º\nAngulo c = ${anguloC}º`);
console.log(`\nOs angulos a, b e c correspondem aos angulos de um triangulo?`);

if(anguloA <= 0 || anguloB <= 0 || anguloC <= 0){
  console.log(`ERRO, todos os angulos devem ser menores que 180º.`);
} else {
  if ((anguloA + anguloB + anguloC) <= 180) {
    console.log(`true`);
  }
  else {
    console.log(`false`);
  }
}