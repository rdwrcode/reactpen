import React from 'react'
import Ratio from './Ratio'

export default () => ( 
  <Ratio>
    {(width, height, hasComputed) => (
      hasComputed 
        ? <img src='http://lorempixel.com/480/320/animals/2/' alt='animals' width={width} height={height} /> 
        : <img src='http://lorempixel.com/480/320/people/99/' alt='people' width={width} height={height} />
    )}
  </Ratio>
)