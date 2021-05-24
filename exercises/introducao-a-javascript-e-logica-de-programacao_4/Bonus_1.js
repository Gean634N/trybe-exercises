/*
Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

*/
function conversorRomanoArabico(n) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let numeroStr = n.toUpperCase() 
  let numero = romanos[numeroStr[0]];

  let conta = 0;
  
  

  for (let i = 1; i < numeroStr.length; i += 1) {
    if ( i === (numeroStr.length - 1)){
      if (numeroStr[i] === numeroStr[i - 1]) {
        conta += romanos[numeroStr[i]]
        numero += conta;
        break;
      } else if (numeroStr[i] < numeroStr[i - 1]) {
        conta += romanos[numeroStr[i]];
        numero += conta;
        break;
      } else if (numeroStr[i] > numeroStr[i - 1]) {
        numero -= conta;
        numero += romanos[numeroStr[i]];
        break;
      }
    }
    if (numeroStr[i] === numeroStr[i - 1]) {
      conta += romanos[numeroStr[i]]
    } else if (numeroStr[i] < numeroStr[i - 1]) {
      numero += conta;
      conta = romanos[numeroStr[i]];
    } else if (numeroStr[i] > numeroStr[i - 1]) {
      numero -= conta;
      conta = romanos[numeroStr[i]]
    }
  }

  return numero;
}

console.log(conversorRomanoArabico('xxxv'));
