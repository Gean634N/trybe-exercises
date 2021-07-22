// Exercicio 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let pecas = ['torre','cavalo','bispo','rainha','rei','peão'];
let pecaEscolhida = 'Rainha';
let peca = pecaEscolhida.toLowerCase();

let index = pecas.indexOf(peca);

switch (index) {
  case 0:
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;
  case 1:
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;
  case 2:
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
    break;
  case 3:
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
  case 4:
    console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
    break;
  case 5:
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;
  default:
    console.log('Não corresponde a uma peça de xadrez.');
    break;
}
