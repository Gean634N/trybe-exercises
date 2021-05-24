// Exercicio 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Não',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Não',
};

for (let key in info) {
  if (key != 'recorrente'){
    console.log(`${info[key]} e ${info2[key]}`);
  } else if (info[key] == info2[key] && info[key] == 'Sim') { 
    console.log('Ambos recorrentes');
  } else if (info[key] == info2[key] && info[key] == 'Não') { 
    console.log('Ambos não recorrentes');
  } else if (info[key] == 'Sim'){
      console.log('Recorrente e Não Recorrente');
  } else if (info[key] == 'Não'){
    console.log('Não Recorrente e Recorrente');
  }
}
