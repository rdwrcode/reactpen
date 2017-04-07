import React from 'react'

class GoodCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0} 
    this.increment = this.increment.bind(this)
  }
  increment(){
   this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
   this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }
  render(){
    return (
      <div>
        <h1>Counter2: Good Counter</h1>
        <h2>A function is passed to setState twice. Always incremented by 2</h2>
        <h2>Updates will be queued and later executed in the order they were called.</h2>
        <button onClick={this.increment}>IncrementByTwo</button>
        <div>{this.state.count}</div>
        <hr />
      </div>
    )
  }
}

export default GoodCounter