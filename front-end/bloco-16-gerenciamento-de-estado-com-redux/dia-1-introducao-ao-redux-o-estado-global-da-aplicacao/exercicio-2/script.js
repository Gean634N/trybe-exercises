const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};
const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const NOME = 'NOME';
const SOBRENOME = 'SOBRENOOME';

const alteraNome = () => ({ type: NOME });
const alteraSobrenome = () => ({ type: SOBRENOME });

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case NOME:
      return {...state, nome: 'Gean'};
    case SOBRENOME:
      return {...state, sobrenome: 'Gonçalves'}
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case NOME:
      return {...state, nome: 'Elaine'};
    case SOBRENOME:
      return {...state, sobrenome: 'Gonçalves'}
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  primeiro: meuPrimeiroReducer,
  segundo: meuSegundoReducer
});

const store = Redux.createStore(rootReducer);

store.subscribe(()=>{
  const { primeiro, segundo } = store.getState()
  document.getElementById('nome-1').innerHTML = primeiro.nome
  document.getElementById('sobrenome-1').innerHTML = primeiro.sobrenome
  document.getElementById('nome-2').innerHTML = segundo.nome
  document.getElementById('sobrenome-2').innerHTML = segundo.sobrenome

  // console.log(primeiro);
})

window.onload = () => {
  setTimeout(() => {
    //Seu dispatch vem aqui //
    store.dispatch(alteraNome())
    store.dispatch(alteraSobrenome())
  }, 3000);
};