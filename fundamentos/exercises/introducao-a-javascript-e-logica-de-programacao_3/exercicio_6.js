/* Exercicio 6 - Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let numeroPrimo = 13;
let divisores = (numeroPrimo/2).toFixed();
let divisivel = true;
for (let i = divisores; i >= 2; i -= 1) {
  if (numeroPrimo % i === 0) {
    divisivel = false;
    break;
  }
}
console.log(`O numero ${numeroPrimo} é primo?\n ${divisivel}`);