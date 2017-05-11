import React from 'react'
import ReactDOM from 'react-dom'
import './Button.css'

export default class extends React.Component {
  mouseDownHandler(e) {
    const myButton = ReactDOM.findDOMNode(this.refs.button)
    const width = 200
    const x = e.offsetX

    let prox = 1 - Math.abs(x - (width / 2)) / width;
    prox = Math.pow(prox, 10) * 1.5;
    const skewAmount = (1 - prox) * .5;

    let transform = "skewY(" + (x < width / 2 ? "-" : "") + "" + skewAmount + "deg)";

    transform += " translateY(" + prox + "px)"  ;

    myButton.style.transform =  transform
    myButton.style.transformOrigin = (200 - x) + "px bottom"
    console.log('mousedown')
  }

  mouseUpHandler(e) {
    console.log('mouseup')
    const myButton = ReactDOM.findDOMNode(this.refs.button)
    myButton.style.transform = ''
  }
 
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs.button)
    node.addEventListener('mousedown', this.mouseDownHandler.bind(this))
    node.addEventListener('mouseup', this.mouseUpHandler.bind(this))
  }

  render() {
    return (
      <div className='container'>
        <div className='bg'></div>
        <button ref='button'>Button</button>
      </div>
    )
  }
}
