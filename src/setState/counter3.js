import React from 'react'

const increment = (state, props) => ({value: state.value + props.step})
const decrement = (state, props) => ({value: state.value - props.step})

class CounterFix extends React.Component{
  state = {value: 0}

  incrementHandler = () => {
    this.setState(increment) 
  }

  decrementHandler = () => {
    this.setState(decrement) 
  }

  render(){
    return (
      <div>
        <h1>Counter3: Fix Counter1 with modification</h1>
        <h2>It is safe to pass a function to setState.</h2>
        <div>{this.state.value}</div>
        <button onClick={this.incrementHandler}>+{this.props.step}</button>
        <button onClick={this.decrementHandler}>-{this.props.step}</button>
        <hr />
      </div>
    )
  }
}

export default CounterFix