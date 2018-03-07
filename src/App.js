import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';

class App extends Component {


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Example</h1>
        </header>
        <Counter name="crimson" />
        <Counter name="darkcyan"/>
        <Counter name="dodgerblue"/>
        <Counter name="mediumvioletred"/>
      </div>
    );
  }
}

export default App;
