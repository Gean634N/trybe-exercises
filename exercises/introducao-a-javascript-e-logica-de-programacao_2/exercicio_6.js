// Exercicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeImpares = 0;
for (const n of numbers) {
  console
  if ((n % 2) !== 0) {
    quantidadeImpares += 1;
  }
  
}
if (quantidadeImpares > 0) {
  console.log(`Há ${quantidadeImpares} numeros impares no array`)
} else {
  console.log(`Nenhum valor impar encontrado`);
}
