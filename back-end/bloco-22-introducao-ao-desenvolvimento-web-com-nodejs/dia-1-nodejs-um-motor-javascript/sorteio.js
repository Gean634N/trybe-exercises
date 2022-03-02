module.exports = () => {
  const { questionInt, question } = require('readline-sync');

  const numeroEscolhido = questionInt('Escolha um numero entre 0 e 10: ');

  const sort = Math.round(Math.random() * 10);
  let message = ''
  if (numeroEscolhido === sort) {
    console.log(`
    
    Você acertou, parabéns!!!!!
    
    `);
  } else {
    console.log(`Você errou, o numero sorteado foi ${sort}\n\n`);
  }
}
