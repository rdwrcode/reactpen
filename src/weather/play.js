import React from 'react'
//import s1 from './s1.svg'
import night from './night.svg'
//import s3 from './s3.svg'
import './weather.css'

export default () => (
  <div className='weather-app'>
    <div className="weather">
      <img src={night} alt="night" />
    </div>
  </div>
)