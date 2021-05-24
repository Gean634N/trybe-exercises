// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.


let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function numerosPares (vector) {
  let array = [];

  for (let i of vector) {
    for (let j of i) {
      if ((j % 2) === 0) {
        array.push(j);
      }
    }
  }

  return array;
}

console.log(numerosPares(vector));