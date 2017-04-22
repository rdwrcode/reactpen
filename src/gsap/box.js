/* global TweenMax */
/* global TweenLite */ 
/* global Sine */
/* global TimelineMax */
/* global TimelineLite */
import React from 'react'
import ReactDOM from 'react-dom'
import './box.css'

class Container extends React.Component {
  componentDidMount() {
    const node1 = ReactDOM.findDOMNode(this.refs.box1)
    const node2 = ReactDOM.findDOMNode(this.refs.box2)
    TweenMax.to(node1, 8, {x: 400, y: 200})
    TweenMax.to(node2, 4, {x: 0, y: 0, width: 200, boxShadow:"0px 0px 20px red", color:"#FC0"})
  }

  render() {
    return (
      <div className='box-container'>
        <h2>GSAP + React</h2>
        <div className='box1' ref='box1'></div>
        <div className='box2' ref='box2'></div>
      </div>
    )
  }
}

export default Container