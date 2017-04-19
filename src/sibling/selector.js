import React from 'react'
import glamorous from 'glamorous'

const Something = glamorous.div({
  'background-color': 'red',
  '&:first-of-type + &': {  
    'background-color': 'teal'
  },
  '& + &': {
    'margin-top': '10px',
    'background-color': 'orange'
  }
})

const Another = glamorous.li({
  '&:first-of-type + &': {
    color: 'orange'
  }
})

const Selector = () => (
  <div>
    <h1>Glamorous sibling selector test</h1>
    <Something>One</Something>
    <Something>Two</Something>
    <Something>Three</Something>
    <Something>Four</Something>
    <Something>Five</Something>
    <Another>001</Another>
    <Another>002</Another>
    <Another>003</Another>
  </div>
)

export default Selector
