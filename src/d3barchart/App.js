import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {type:'a', value:30}, 
        {type:'b', value:50}, 
        {type:'c', value:15}, 
        {type:'d', value:5}
      ]
    }
  }

  updateData() {
    this.setState({
      data: [
        {type:'a', value:90}, 
        {type:'b', value:35}, 
        {type:'c', value:90}, 
        {type:'d', value:50},
        {type:'e', value:95},
        {type:'f', value:55},
      ]
    })
  }
  
  render() {
    const width = 900;
    const height = 600;
    return (
      <div className="barchart">
        <button onClick={() => this.updateData()}>update</button>
        <div>
          <BarChart 
            width={width}
            height={height}
            data={this.state.data}
            margin={{top: 20, right: 20, bottom: 50, left: 70}}
          />
        </div>
      </div>
    );
  }
}

export default App;
