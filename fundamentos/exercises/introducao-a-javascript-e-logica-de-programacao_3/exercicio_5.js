/* Exercicio 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
*/
let base = 11;
let meiaBase = (base/2).toFixed() ;
for (let i = meiaBase; i > 0; i -= 1) {
  let linhaAsteriscos = '';
  if (i > 1) {
    for (let j = 1; j <= meiaBase; j += 1) {
      if (j < i || j > i) {
        linhaAsteriscos += ' ';
      } else {
        linhaAsteriscos += '*';
      }
    }
    for (let j = 1; j <= meiaBase; j += 1) {
      if (j < (meiaBase - i) || j > (meiaBase - i)) {
        linhaAsteriscos += ' ';
      } else {
        linhaAsteriscos += '*';
      }
    }
  } else {
    for (let j = 0; j < base; j += 1) {
      linhaAsteriscos += '*'
    }
  }
  console.log(linhaAsteriscos);
}
