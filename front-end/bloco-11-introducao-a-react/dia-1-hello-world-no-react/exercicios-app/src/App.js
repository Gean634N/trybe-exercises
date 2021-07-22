import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Caminhar para o on-track', 'Adicionar históricos', 'enviar para a direção', 'enviar para a seconte'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <ul>
          {compromissos.map((item) => Task(item))}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
