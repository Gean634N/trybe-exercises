const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const criarCor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}
// console.log(criarCor());

const nextColor = () => ({ type: NEXT_COLOR });
const previousColor = () => ({ type: PREVIOUS_COLOR });
const randomColor = () => ({ type: RANDOM_COLOR });



const reducer = (state = ESTADO_INICIAL, action) => {
  const { index, colors } = state;

  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: (index < colors.length - 1) ? index + 1 : 0,
      };

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: (index > 0) ? index - 1 : colors.length - 1,
      };

    case RANDOM_COLOR:
      colors.push(criarCor()); // altera o array colors
  
      return {
        ...state,
        index: colors.length - 1,
      }

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(()=>{
  const { index, colors } = store.getState();

  document.getElementById('value').innerHTML = colors[index]
})

document.getElementById("previous").addEventListener("click", () => {store.dispatch(previousColor())})
document.getElementById("next").addEventListener("click", () => {store.dispatch(nextColor())})
document.getElementById("random").addEventListener("click", () => {store.dispatch(randomColor())})
