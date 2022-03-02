const { question } = require('readline-sync');

const req = question(`qual programa vc quer executar?
  imc
  velocidade
  sorteio
  
  Digite sua resposta: `);

const func = require(`./${req}`);
func();