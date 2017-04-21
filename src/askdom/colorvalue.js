import React from 'react'
import ReactDOM from 'react-dom'

class ColorValue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      value: null,
      node: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.getColorValue = this.getColorValue.bind(this)
  }

  componentDidMount() {
    const mydiv = ReactDOM.findDOMNode(this.refs.value)
    mydiv.style.color = 'none'
    this.setState({node: mydiv})
  }

  getColorValue(name) {
    const mynode = this.state.node
    mynode.style.color = name
    this.setState({node: mynode})

    //this.state.node.style.color = name
    return getComputedStyle(this.state.node).color
  }

  handleInput(e) {
    this.setState({
      name: e.target.value,
      value: this.getColorValue(e.target.value)
    })
  }
  
  render() {
    return (
      <div className='Colorvalue'>
        <input type='text' 
          placeholder='Enter color name for its value'
          onChange={this.handleInput}
          value={this.state.name}/>
        <pre></pre>
        <div ref='value'
          className='Colorvalue-value'>
            {this.state.value}
        </div>
      </div>
    )
  }
}

export default ColorValue
