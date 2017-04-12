import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './about/About';
import SetState from './SetState'
import Carousel from './Carousel'
import Controlled from './Controlled'
import PropsChildren from './PropsChildren'
import Weather from './weather/weather'
import Overflow from './overflow/overflow'
import Play from './Play'
import NavDemo from './navigation/nav'
import Noroute from './navigation/noroute'

export default () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/setstate">SetState</Link></li>
        <li><Link to="/carousel">Carousel</Link></li>
        <li><Link to="/controlled">Controlled</Link></li>
        <li><Link to="/propschildren">PropsChildren</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/overflow">Overflow</Link></li>
        <li><Link to="/play">Play</Link></li>
        <li><Link to="/nav">Nav</Link></li>
        <li><Link to="/noroute">Noroute</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={About}/>
      <Route path="/setstate" component={SetState}/>
      <Route path="/carousel" component={Carousel}/>
      <Route path="/controlled" component={Controlled}/>
      <Route path="/propschildren" component={PropsChildren}/>
      <Route path="/weather" component={Weather}/>
      <Route path="/overflow" component={Overflow}/>
      <Route path="/play" component={Play}/>
      <Route path="/nav" component={NavDemo}/>
      <Route path="/noroute" component={Noroute}/>
    </div>
  </Router>
)