function exemplo(um, dois, tres) {
  let retorno = 'certo até aqui';
  if (tres) {
    retorno = 'chegou no if'
  }
  return retorno
}

console.log(exemplo('5', 5, 'foi'));