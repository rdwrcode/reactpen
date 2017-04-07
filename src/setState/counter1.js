import React from 'react'

class BadCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0} 
    this.increment = this.increment.bind(this)
  }
  increment(){
    this.setState({count : this.state.count + 1}) 
    this.setState({count : this.state.count + 1})
  }
  render(){
    return (
      <div>
        <h1>Counter1: Bad Counter</h1>
        <h2>An object is passed to setState twice. Will both be merged? No guarantee.</h2> 
        <h2>Hard to see the increment by 2 with each click.</h2>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>+2</button>
        <hr />
      </div>
    )
  }
}

export default BadCounter