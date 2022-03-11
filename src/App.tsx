import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculate from './components/calculate/calculate';

function App() {
  return (
    <div className="App">
      <Calculate name='Gamer' age={38}></Calculate>
    </div>
  );
}

export default App;
