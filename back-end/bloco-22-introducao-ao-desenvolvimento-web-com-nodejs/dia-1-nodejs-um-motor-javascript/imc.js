module.exports = () => {
  const readline = require('readline-sync');
  
  const peso = readline.questionInt('Qual é o seu peso em Kg? ');
  const altura = readline.questionFloat('Qual é sua altura em metros? ');
  
  const IMC = peso / (altura ^ 2);
  let message = '';
  if (IMC < 18.5) {
    message = 'Abaixo do peso (magreza)';
  } else if (IMC < 24.9) {
    message = 'Peso normal';
  } else if (IMC < 29.9) {
    message = 'Acima do peso (sobrepeso)'
  } else if (IMC < 34.9) {
    message = 'Obesidade grau I'
  } else if (IMC < 39.9) {
    message = 'Obesidade grau II '
  } else {
    message = 'Obesidade graus III e IV'
  }
  console.log(`\n IMC => ${IMC.toFixed(2)}\n Situação => ${message}`);
}
