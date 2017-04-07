import React from 'react'
import Coverflow from 'react-coverflow'

const helperfn = () => {
  /* do your action */
  console.log('coverflow helper')
}

export default () => (
  <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
    >
    <img src="http://lorempixel.com/960/500/people/1/" alt="slide1" data-action={helperfn}/>
    <img src="http://lorempixel.com/960/500/people/2/" alt="slide2"/>
    <img src="http://lorempixel.com/960/500/people/3/" alt="slide3"/>
    <img src="http://lorempixel.com/960/500/people/4/" alt="slide4"/>
    <img src="http://lorempixel.com/960/500/people/5/" alt="slide5"/>
  </Coverflow>
)