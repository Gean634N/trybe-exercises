// Exercicio 4 - Faça uma pirâmide com n asteriscos de base

let n = 111;
let m = n/2; // variavel q determina a altura da piramide.

// A piramide será formada por duas metades, então o loop externo faz apenas (n/2) iterações, representado pela variavel 'm'.
for (let i = m; i > 0; i -= 1) { // iterações regressivas facilita a primeira metade.
  let asteriscos = '';

  /* Primeira parte:
   enquanto a variavel j é menor que a variavel i, imprimimos espaços, depois disso imprimimos asteriscos.
   ex:n = 10, a variavel m = 5 por consequencia i inicia em 5.
  
       *  -> i(5) vai imprimir 4 espaços e 1 asterisco
      **  -> i(4) vai imprimir 3 espaços e 2 asteriscos
     ***  -> i(3) vai imprimir 2 espaços e 3 asteriscos
    ****  -> i(2) vai imprimir 1 espaços e 4 asteriscos
   *****  -> i(1) vai imprimir 0 espaços e 5 asteriscos
  */

  for (let j = 0; j <= m; j += 1) {  
    if (j < i){ 
      asteriscos += ' ';
    } else {
      asteriscos += '*';
    }
  }

  /* 
  Segunda parte:
   enquanto a variavel j é menor ou igual a (m - i), imprimimos asteriscos.
   ex:n = 10, a variavel m = 5 por consequencia i inicia em 5, então m-i inicia em 0.
  
   *       -> (m -i)(0) vai imprimir 1 asterisco
   **      -> (m -i)(1) vai imprimir 2 asteriscos
   ***     -> (m -i)(2) vai imprimir 3 asteriscos
   ****    -> (m -i)(3) vai imprimir 4 asteriscos
   *****   -> (m -i)(4) vai imprimir 5 asteriscos
  */

  for (let j = 0; j < m; j += 1){
    if (j <= m - i ){
      asteriscos += '*';
    }
    
  }
  console.log(asteriscos);
}
