import React from 'react'
import Ratio from './Ratio'

export default () => ( 
  <Ratio>
    {(width, height, hasComputed) => (
      <div style={{width, height}}>Hello world!</div>
    )}
  </Ratio>
)