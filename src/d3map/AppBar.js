import React, { Component } from 'react'
import './WorldMap.css'
import BarChart from './BarChart1'

class App extends Component {
   render() {
   return (
      <div className="WorldMap">
      <div className="WorldMap-header">
      <h2>d3ia dashboard</h2>
      </div>
      <div>
      <BarChart data={[5,10,1,3]} size={[500,500]} />
      </div>
      </div>
   )
   }
}
export default App
