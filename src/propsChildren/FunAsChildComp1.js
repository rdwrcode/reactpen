import React from 'react'
import MyComp from './MyComp'

export default () => (
  <MyComp>
    {(name) => (
      <div>{name}</div>
    )}
  </MyComp>
)