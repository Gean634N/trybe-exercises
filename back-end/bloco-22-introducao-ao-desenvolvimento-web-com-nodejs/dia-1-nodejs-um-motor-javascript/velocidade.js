module.exports = () => {
  const readline = require('readline-sync');

  const distancia = readline
    .questionInt('Qual foi a distancia percorrida em metros? ');
  const tempo = readline
    .questionInt('Quanto tempo foi necessário para percorrer o trajeto em segundos? ');
  const velocidade = distancia / tempo;

  console.log(`A velocidade do carro é de ${velocidade.toFixed()}m/s`);
}
