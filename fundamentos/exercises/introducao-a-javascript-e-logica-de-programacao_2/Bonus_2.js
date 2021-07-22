// Exercicio Bonus 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  for (let j = i; j < numbers.length; j += 1) {
    if (numbers[i] < numbers[j]) {
      let number = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = number;
    }
  }
}

console.log(numbers);