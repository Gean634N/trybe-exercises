// Exercicio 3 - Agora inverta o lado do triângulo do exercicio anterior.

let n = 5;

for (let i = n; i > 0; i -= 1) {
  let asteriscos ='';
  for (let j = 1; j <= n; j += 1) {
    if (j < i){
      asteriscos += ' ';
    } else {
      asteriscos += '*';
    }
  }
  console.log(asteriscos);
}
