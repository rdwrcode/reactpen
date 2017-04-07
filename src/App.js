import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// add the pen in react
import BadCounter from './setState/counter1'
import GoodCounter from './setState/counter2'
import CounterFix from './setState/counter3'
import Multiply from './setState/multiplyby'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ReactPen</h2>
          <h3>Interesting stuff coded in React</h3>
        </div>
        <p className="App-intro"></p>
        <h1>~~2017/04/07~~</h1>
        <BadCounter />
        <GoodCounter />
        <CounterFix step={5} />
        <Multiply />
      </div>
    );
  }
}

export default App;
