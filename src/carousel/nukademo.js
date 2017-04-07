import React from 'react'
import Carousel from 'nuka-carousel'

const NukaDemo = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" alt="slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt="slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt="slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt="slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt="slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt="slide6"/>
      </Carousel>
    )
  }
})

export default NukaDemo