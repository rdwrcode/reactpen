import React from 'react'

const multiplyBy = (factor) => {
  return (state) => (
    {value: state.value * factor}
  )
}

class Multiply extends React.Component{
  state = {
    factor: 3,
    value: 10
  }

  multiplyHandler = () => {
    this.setState(multiplyBy(this.state.factor)) 
  }

  render(){
    return (
      <div>
        <h1>Counter4: Multiply by a factor</h1>
        <h2>the initial value is 10, factor is 3.</h2>
        <h2>Still it is safe to pass a function to setState.</h2>
        <div>{this.state.value}</div>
        <button onClick={this.multiplyHandler}>x{this.state.factor}</button>
        <hr />
      </div>
    )
  }
}

export default Multiply