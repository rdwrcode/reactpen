import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './about/About';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/*
import logo from './logo.svg';
import './App.css';
// 2017/04/07
import BadCounter from './setState/counter1'
import GoodCounter from './setState/counter2'
import CounterFix from './setState/counter3'
import Multiply from './setState/multiplyby'
// 2017/04/07
import NukaDemo from './carousel/nukademo'
import CoverDemo from './carousel/coverdemo'
// 2017/04/08
import ListComp from './propsChildren/ListComp'
import Parent from './propsChildren/Parent'
import HigherOrder from './propsChildren/HigherOrder'
import Container1 from './propsChildren/FunAsChildComp1'
import Container2 from './propsChildren/FunAsChildComp2'
import UseRatioA from './propsChildren/UseRatioA'
import UseRatioB from './propsChildren/UseRatioB'
import Demo from './propsChildren/Demo'
// 2017/04/08
import UncontrolledForm from './controlled/UncontrolledForm'
import ControlledForm from './controlled/ControlledForm'
// 2017/04/10
import Weather from './weather/weather'

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
        <h1>~~2017/04/10~~</h1>
        <Weather />
        <hr />
        <h1>~~2017/04/08~~</h1>
        <UncontrolledForm />
        <hr />
        <ControlledForm />
        <hr />
        <ListComp />
        <Parent />
        <HigherOrder />
        <Container1 />
        <Container2 />
        <UseRatioA />
        <hr />
        <UseRatioB />
        <hr />
        <Demo />
        <hr />
        <h1>~~2017/04/07~~</h1>
        <BadCounter />
        <GoodCounter />
        <CounterFix step={5} />
        <Multiply />
        <NukaDemo />
        <CoverDemo />
      </div>
    );
  }
}
*/

export default App;