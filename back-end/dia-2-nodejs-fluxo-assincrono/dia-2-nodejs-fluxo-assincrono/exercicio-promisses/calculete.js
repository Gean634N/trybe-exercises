const calculete = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    const testType = (
      typeof (num1) !== "number" ||
      typeof (num2) !== "number" ||
      typeof (num3) !== "number"
    )
    if (testType) reject(new Error("Informe apenas números"));
    const resultado = (num1 + num2) * num3;

    if (resultado < 50) reject(new Error("Valor muito baixo"));
    resolve(resultado)
  });
  return promise;
};

const randomNumbers = (size) => {
  return Array
    .from({length: size})
    .map(() => Math.floor(Math.random() * 100 + 1))
}

const doCalculetePromise = () => {
  numArr = randomNumbers(3);
  
  calculete(...numArr)
    .then(result => console.log(`sucesso: ${result}`))
    .catch(err => console.log(`erro: ${err.message}`));
}
//doCalculetePromise();

const doCalculeteAsync = async () => {
  numArr = randomNumbers(3);

  try {
    const result = await calculete(...numArr);
    console.log(`sucesso: ${result}`);
  } catch (err) {
    console.log(`erro: ${err.message}`);
  }
}
doCalculeteAsync();

/** 
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
 */