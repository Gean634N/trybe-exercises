

let salarioInicial, salario, salarioFinal, alicotaINSS, alicotaIR;

salarioInicial = (1500 + Math.random() * 4000); // Atribui um salario aleatório entre R$ 1.500,00 e R$ 5.500,00.

// 1º passo - calcular o desconto do INSS
if (salarioInicial > 0) {
  if (salarioInicial < 1556.94) {
    alicotaINSS = 8 /100; // Salário bruto até R$ 1.556,94: alíquota de 8%
    salario = salarioInicial - salarioInicial*alicotaINSS;
  } else if (salarioInicial < 2594.92) {
    alicotaINSS = 9 / 100;// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    salario = salarioInicial - salarioInicial*alicotaINSS;
  } else if (salarioInicial < 5189.82) {
    alicotaINSS = 11 / 100; // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    salario = salarioInicial - salarioInicial*alicotaINSS;
  } else {
    alicotaINSS = 570.88; // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    salario = salarioInicial - alicotaINSS;
  }
} else {
  console.log('ERRO, valor de salario invalido.');
}

// 2º passo - calcular o desconto do IR no salario já descontado do INSS.
if (salario < 1903.98) {
  alicotaIR = 0; // Até R$ 1.903,98: isento de imposto de renda
  salarioFinal = salario - salario*alicotaIR;
} else if (salario < 2826.65) {
  alicotaIR = 7.5 / 100;// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  salarioFinal = salario - (salario*alicotaIR - 142.80);
} else if (salario < 3751.05) {
  alicotaIR = 15 / 100; // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  salarioFinal = salario - (salario*alicotaIR - 354.80);
} else if (salario < 4664.68) {
  alicotaIR = 22.5 / 100;// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  salarioFinal = salario - (salario*alicotaIR - 636.13);
} else {
  alicotaIR = 27.5 / 100;; // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  salarioFinal = salario - (salario*alicotaIR - 869.36);
}

// Saidas de dado.

console.log(`Seu salário bruto é igual a ${salarioInicial.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`Seu salário liquido é igual a ${salarioFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
