import React from 'react'
import MyComp from './MyComp'

export default () => (
  <MyComp>
    {(name) => (
      <img src='http://lorempixel.com/480/320/people/9/' alt={name} />
    )}
  </MyComp>
)