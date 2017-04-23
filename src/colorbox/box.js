import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  padding: 20px;
  margin: 20px;
  width: ${(props) => props.width}px;
  background: ${(props) => props.color};
`

export default class ColorBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      width: '250'
    }
    this.textInputHandler = this.textInputHandler.bind(this)
    this.rangeInputHandler = this.rangeInputHandler.bind(this)
  }

  textInputHandler(e) {
    this.setState({color: e.target.value})
  }

  rangeInputHandler(e) {
    console.log(e.target.value)
    this.setState({width: e.target.value})
  }

  render() {
    return (
      <div className='colorbox'>
        <Box color={this.state.color} width={this.state.width}>
          <label id="box-label">Box Color</label>
          <input id='box-color' type='text' onChange={this.textInputHandler} value={this.state.color} />
          <br />
          <label id="box-label">Box Width</label>
          <input type='range' id='box-width' onChange={this.rangeInputHandler} min='0' max='2000' step='1' value={this.state.width}/> 
        </Box>
      </div>
    ) 
  }
}