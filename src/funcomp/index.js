import React from 'react'
import uppercase from './upper'
import clap from './clap'
import emphasize from './emphasize'
import Greeting from './greeting'

function composed(name) {
  const a = Greeting.fold({ name })
  const b = uppercase(a)
  const c = emphasize(b)
  const d = clap(c)
  
  return d
}

export default class extends React.Component {
  render() {
    const test = composed('alice')
    return test
  }
}