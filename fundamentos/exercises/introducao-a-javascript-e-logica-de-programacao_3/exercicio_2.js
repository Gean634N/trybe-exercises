// Exercicio 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;

for (let i = 1; i <= n; i += 1) {
  let asteriscos = '';
  for (let j = 0; j < i; j += 1){
    asteriscos += '*';
  }
  console.log(asteriscos);
}
