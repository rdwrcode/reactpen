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

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/setstate">SetState</Link></li>
        <li><Link to="/carousel">Carousel</Link></li>
        <li><Link to="/controlled">Controlled</Link></li>
        <li><Link to="/propschildren">PropsChildren</Link></li>
        <li><Link to="/weather">Weather</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={About}/>
      <Route path="/setstate" component={SetState}/>
      <Route path="/carousel" component={Carousel}/>
      <Route path="/controlled" component={Controlled}/>
      <Route path="/propschildren" component={PropsChildren}/>
      <Route path="/weather" component={Weather}/>
    </div>
  </Router>
)

export default App;