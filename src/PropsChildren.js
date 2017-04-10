import React from 'react'
// 2017/04/08
import ListComp from './propsChildren/ListComp'
import Parent from './propsChildren/Parent'
import HigherOrder from './propsChildren/HigherOrder'
import Container1 from './propsChildren/FunAsChildComp1'
import Container2 from './propsChildren/FunAsChildComp2'
import UseRatioA from './propsChildren/UseRatioA'
import UseRatioB from './propsChildren/UseRatioB'
import Demo from './propsChildren/Demo'

export default () => (
  <div className="App">
    <h1>~~2017/04/08~~</h1>
    <ListComp />
    <Parent />
    <HigherOrder />
    <Container1 />
    <Container2 />
    <UseRatioA />
    <hr />
    <UseRatioB />
    <hr />
    <Demo />
    <hr />
  </div>
)