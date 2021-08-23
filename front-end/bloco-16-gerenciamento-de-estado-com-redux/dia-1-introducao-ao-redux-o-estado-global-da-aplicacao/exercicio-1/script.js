const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const nextColor = () => ({ type: NEXT_COLOR });
const previousColor = () => ({ type: PREVIOUS_COLOR });

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

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(()=>{
  const { index, colors } = store.getState();
  console.log(index)

  document.getElementById('value').innerHTML = colors[index]
})

document.getElementById("previous").addEventListener("click", () => {store.dispatch(previousColor())})
document.getElementById("next").addEventListener("click", () => {store.dispatch(nextColor())})
