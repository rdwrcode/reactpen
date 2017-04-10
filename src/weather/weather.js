import React from 'react'
import './weather.css'
//import s1 from './s1.svg'
//import s2 from './s2.svg'
//import s3 from './s3.svg'
import s4 from './s4.svg'

export default () => (
  <div className='weather-app'>
    <div className="weather">
      <svg className="state" viewBox="-112.5 -112.5 225 225">
        <path d="M-40-15h38a14.5 14.5 0 1 0-13-23
                M-35 4h65a9.5 9.5 0 1 0-6-16
                M-40 23h63a10 10 0 1 1-6 16"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="state" viewBox="-112.5 -112.5 225 225">
        <g>
          <path d="M-24-33a43 43 0 1 0 61 59
                         a57 57 0 0 1-61-59z"></path>
          <polygon className="star" points="8.5,-52.5 21.73,-11.8 -12.9,-36.95 29.9,-36.95 -4.73,-11.8"></polygon>
          <polygon className="star" points="32.5,-14 41.32,13.14 18.23,-3.64 46.77,-3.64 23.68,13.14"></polygon>
        </g>
      </svg>
      <svg className="state" viewBox="-112.5 -112.5 225 225">
        <g>
          <radialGradient id="rg" gradientUnits="userSpaceOnUse" cx="0" cy="0">
            <stop stopColor="currentColor" stopOpacity="0" offset="0.15"></stop>
            <stop stopColor="currentColor" offset="0.16"></stop>
            <stop stopColor="currentColor" offset="0.23"></stop>
            <stop stopColor="currentColor" stopOpacity="0" offset="0.24"></stop>
            <stop stopColor="currentColor" stopOpacity="0" offset="0.31"></stop>
            <stop stopColor="currentColor" offset="0.32"></stop>
          </radialGradient>
          <polygon className="starshape" points="0,-50 16,-27.71 43.3,-25 32,0 43.3,25 16,27.71 0,50 -16,27.71 -43.3,25 -32,0 -43.3,-25 -16,-27.71"></polygon>
        </g>
      </svg>
      <svg className="state" viewBox="-112.5 -112.5 225 225">
        <path d="M-33 29a20 20 0 1 1 6-40
                       a29 29 0 0 1 56 10
                       a15 15 0 0 1 9 30z"></path>
      </svg>
    </div>
  </div>
)