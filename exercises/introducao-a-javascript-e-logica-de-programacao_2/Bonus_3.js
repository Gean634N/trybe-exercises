// Exercicio Bonus 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersTimes = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (i < (numbers.length -1)){
    numbersTimes.push(numbers[i] * numbers[i + 1]);
  } else {
    numbersTimes.push(numbers[i] * 2);
  }
}

console.log(numbersTimes);
