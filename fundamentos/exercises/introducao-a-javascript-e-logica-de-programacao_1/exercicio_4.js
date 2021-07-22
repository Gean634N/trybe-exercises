// Exercicio 4 Faça um programa que, dado um valor definido numa variável,
// retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 

let a = -10 + Math.floor(Math.random() * 21);
console.log(`Numero = ${a}`);

if (a < 0) {
  console.log(`Negative`);
}

else if (a > 0) {
  console.log(`Positive`);
}

else {
  console.log(`Zero`);
}
