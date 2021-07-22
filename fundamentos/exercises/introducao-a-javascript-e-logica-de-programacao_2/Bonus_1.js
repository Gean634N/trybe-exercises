// Exercicio Bonus 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers.length);

for (let i = 0; i < numbers.length; i += 1) {
  for (let j = i; j < numbers.length; j += 1){
    if (numbers[j] < numbers[i]) {
      console.log(`O numero ${numbers[j]} é menor que o numero ${numbers[i]}`);
      let numero = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = numero;
      console.log(` ${numbers[j]}  ${numbers[i]}`);
      console.log(numbers);
    }
  }
}

console.log(numbers);
