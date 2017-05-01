import React from 'react'

const View = computation => ({
  fold: props => computation(props)
})

const greeting = View(({ name }) => <span>Hello {name}!</span>)

export default greeting 