/* global TweenMax */
/* global TweenLite */ 
/* global Sine */
/* global TimelineMax */
/* global TimelineLite */
import React from 'react'
import ReactDOM from 'react-dom'
import './boxes.css'

class Container extends React.Component {
  componentDidMount() {
    const top = ReactDOM.findDOMNode(this.refs.top)
    const right = ReactDOM.findDOMNode(this.refs.right)
    const bottom = ReactDOM.findDOMNode(this.refs.bottom)
    const left = ReactDOM.findDOMNode(this.refs.left)

    const t = new TimelineMax({repeat: -1, yoyo: true})
    t.to(top, 0.5, {y: "-100"})
    t.to(right, 0.5, {x: "100"})
    t.to(bottom, 0.5, {y: "100"})
    t.to(left, 0.5, {x: "-100"})
  }

  render() {
    return (
      <div className='box-container'>
        <div className='box4' ref='top'></div>
        <div className='box4' ref='right'></div>
        <div className='box4' ref='bottom'></div>
        <div className='box4' ref='left'></div>
      </div>
    )
  }
}

export default Container