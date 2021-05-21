// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par.
// Caso contrário, ele retorna false . Bonus: use somente um if


let numeros = []; // variavel q receberá os 3 numeros.
for (let i = 0; i < 3; i += 1) { // este for atribui tres numeros aleatórios a variavel numeros[].
  let numero = Math.floor(Math.random() * 10);
  numeros.push(numero);
  console.log(`${i + 1}º numero = ${numeros[i]}`);
 }


if ((numeros[0] % 2 === 0) || (numeros[1] % 2 === 0) ||(numeros[2] % 2 === 0)) {
  console.log(true);
}