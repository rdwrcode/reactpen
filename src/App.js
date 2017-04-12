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
        <li><Link to="/reactpen">About</Link></li>
        <li><Link to="/reactpen/setstate">SetState</Link></li>
        <li><Link to="/reactpen/carousel">Carousel</Link></li>
        <li><Link to="/reactpen/controlled">Controlled</Link></li>
        <li><Link to="/reactpen/propschildren">PropsChildren</Link></li>
        <li><Link to="/reactpen/weather">Weather</Link></li>
        <li><Link to="/reactpen/overflow">Overflow</Link></li>
        <li><Link to="/reactpen/play">Play</Link></li>
        <li><Link to="/reactpen/nav">Nav</Link></li>
        <li><Link to="/reactpen/noroute">Noroute</Link></li>
      </ul>

      <hr/>

      <Route exact path="/reactpen" component={About}/>
      <Route path="/reactpen/setstate" component={SetState}/>
      <Route path="/reactpen/carousel" component={Carousel}/>
      <Route path="/reactpen/controlled" component={Controlled}/>
      <Route path="/reactpen/propschildren" component={PropsChildren}/>
      <Route path="/reactpen/weather" component={Weather}/>
      <Route path="/reactpen/overflow" component={Overflow}/>
      <Route path="/reactpen/play" component={Play}/>
      <Route path="/reactpen/nav" component={NavDemo}/>
      <Route path="/reactpen/noroute" component={Noroute}/>
    </div>
  </Router>
)