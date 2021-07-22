import data from './data';
import Pokedex from './components/Pokedex';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex data={data} />
      </div>
    );
  }
}

export default App;
