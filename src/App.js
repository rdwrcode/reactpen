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
import Selector from './sibling/selector'
import ColorValue from './askdom/colorvalue'
import CD from './countdown/cd'
import Walk from './keepwalking/walk'
import Box from './gsap/container'
import ColorBox from './colorbox/box'
import FlexBox from './flexbox/parentkid'
import Funcomp from './funcomp'
import Fstate from './fstate/count'
import D3map from './d3map/AppBar'
import D3barchart from './d3barchart/App'
import Button from './button/Button'
import Warning from './funcss/traditional'
import WarningButton from './funcss/traditional2'
import Warning2 from './funcss/functional'
import WarningButton2 from './funcss/functional2'

import SimpleSVG from './svgcomp/umbrella'

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
        <li><Link to="/reactpen/selector">Selector</Link></li>
        <li><Link to="/reactpen/colorvalue">ColorValue</Link></li>
        <li><Link to="/reactpen/countdown">Countdown</Link></li>
        <li><Link to="/reactpen/walk">KeepWalking</Link></li>
        <li><Link to="/reactpen/box">Box</Link></li>
        <li><Link to="/reactpen/colorbox">ColorBox</Link></li>
        <li><Link to="/reactpen/flexbox">FlexBox</Link></li>
        <li><Link to="/reactpen/funcomp">Funcomp</Link></li>
        <li><Link to="/reactpen/fstate">Fstate</Link></li>
        <li><Link to="/reactpen/d3map">D3map</Link></li>
        <li><Link to="/reactpen/d3barchart">D3barchart</Link></li>
        <li><Link to="/reactpen/button">Button</Link></li>
        <li><Link to="/reactpen/warning">Warning</Link></li>
        <li><Link to="/reactpen/warning2">Warning2</Link></li>
        <li><Link to="/reactpen/warningbutton">WarningButton</Link></li>
        <li><Link to="/reactpen/warningbutton2">WarningButton2</Link></li>
        <li><Link to="/reactpen/simplesvg">SimpleSVG</Link></li>
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
      <Route path="/reactpen/selector" component={Selector}/>
      <Route path="/reactpen/colorvalue" component={ColorValue}/>
      <Route path="/reactpen/countdown" component={CD}/>
      <Route path="/reactpen/walk" component={Walk}/>
      <Route path="/reactpen/box" component={Box}/>
      <Route path="/reactpen/colorbox" component={ColorBox}/>
      <Route path="/reactpen/flexbox" component={FlexBox}/>
      <Route path="/reactpen/funcomp" component={Funcomp}/>
      <Route path="/reactpen/fstate" component={Fstate}/>
      <Route path="/reactpen/d3map" component={D3map}/>
      <Route path="/reactpen/d3barchart" component={D3barchart}/>
      <Route path="/reactpen/button" component={Button}/>
      <Route path="/reactpen/warning" component={Warning}/>
      <Route path="/reactpen/warning2" component={Warning2}/>
      <Route path="/reactpen/warningbutton" component={WarningButton}/>
      <Route path="/reactpen/warningbutton2" component={WarningButton2}/>
      <Route path="/reactpen/simplesvg" component={SimpleSVG}/>
    </div>
  </Router>
)
