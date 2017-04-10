import React from 'react'
import BadCounter from './setState/counter1'
import GoodCounter from './setState/counter2'
import CounterFix from './setState/counter3'
import Multiply from './setState/multiplyby'

import './Common.css'

export default () => (
  <div className='SetState'>
    <h1>~~2017/04/07~~</h1>
    <BadCounter />
    <GoodCounter />
    <CounterFix step={5} />
    <Multiply />
  </div>
)