import React from 'react';
import logo from './logo_up.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="wavy">
          <span style={{'--i': 1}}>L</span>
          <span style={{'--i': 2}}>o</span>
          <span style={{'--i': 3}}>a</span>
          <span style={{'--i': 4}}>d</span>
          <span style={{'--i': 5}}>i</span>
          <span style={{'--i': 6}}>n</span>
          <span style={{'--i': 7}}>g</span>
          <span style={{'--i': 8}}>.</span>
        </div>
      </header>
    </div>
  );
}

export default App;