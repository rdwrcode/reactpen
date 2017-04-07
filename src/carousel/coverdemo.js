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
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=cover1" alt="slide1" data-action={helperfn}/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=cover2" alt="slide2"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=cover3" alt="slide3"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=cover4" alt="slide4"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=cover5" alt="slide5"/>
  </Coverflow>
)