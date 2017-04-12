import React from 'react'
import './noroute.css'

const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"]

class Noroute extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      target: null,
      links: null
    }
    
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
  }

  mouseEnterHandler(e) {
    console.log(this.refs.mynav)
    console.log(e.target)
    //console.log(e.target.findDOMNode('a'))
    console.log(e.target.parentNode)
    console.log(e.target.parentNode.classList.contains("active"))
    console.log(e.target.parentNode.classList)

    if (!e.target.parentNode.classList.contains("active")) {
      const links = document.querySelectorAll(".mynav a");
      
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
        links[i].style.opacity = "0.25";
      }
      
      e.target.parentNode.classList.add("active");
      e.target.style.opacity = "1";

      const width = e.target.getBoundingClientRect().width;
      const height = e.target.getBoundingClientRect().height;
      const left = e.target.getBoundingClientRect().left + window.pageXOffset;
      const top = e.target.getBoundingClientRect().top + window.pageYOffset;
      const color = colors[Math.floor(Math.random() * colors.length)];

      this.refs.target.style.width = `${width}px`;
      this.refs.target.style.height = `${height}px`;
      this.refs.target.style.left = `${left}px`;
      this.refs.target.style.top = `${top}px`;
      this.refs.target.style.borderColor = `${color} ${color}`;
      this.refs.target.style.transform = "none";
    }
  

    // end

  }

  clickHandler(e) {
    //e.preventDefault()
  }

  resizeHandler() {
    const active = document.querySelector(".mynav li.active");

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;

      this.refs.target.style.left = `${left}px`;
      this.refs.target.style.top = `${top}px`;
    }
  }

  componentWillReceiveProps(next) {
    this.setState(this.getComputedDimensions(next));
  }

  componentDidMount() {
    //
    const target = this.refs.target
    const links = document.querySelectorAll(".mynav a");
    this.setState({
      target: target,
      links: links
    })

    // add resize handler
    window.addEventListener("resize", this.resizeHandler)
    // add click and mouse enter handlers
    
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", this.clickHandler);
      links[i].addEventListener("mouseenter", this.mouseEnterHandler);
    }
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
    const links = document.querySelectorAll(".mynav a");
    for (let i = 0; i < links.length; i++) {
      this.links[i].removeEventListener("click", this.clickHandler);
      this.links[i].removeEventListener("mouseenter", this.mouseEnterHandler);
    }
  }

  render() {
    return (
      <div className='Noroute-app'>
        <h1 className='Noroute-h1'>Hover over the links</h1>
        <nav ref="mynav" className="mynav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Clients</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>

        <span ref='target' className="target"></span>
      </div>
    )
  }
}

export default Noroute