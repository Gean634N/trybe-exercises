/*
// Exercicio 1 Parte II - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

function verificaPalindrome(palavra) {
  let palindrome;
  let contador = palavra.length - 1;
  for (let i = 0; i <= contador; i += 1) {
    if (palavra[i] === palavra[contador - i]) {
      palindrome = true;
      if (i === contador) {
        console.log(`É um palindromo.`);

      }
    } else {
      palindrome = false;
      console.log(`Não é um palindromo.`);
      break;
    };
  };
  return palindrome;
};
verificaPalindrome('arara');

