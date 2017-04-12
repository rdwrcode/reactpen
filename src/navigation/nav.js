import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './nav.css'

const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"]

const Home = () => (
  <div>Home</div>
)

const About = () => (
  <div>About</div>
)

const Company = () => (
  <div>Company</div>
)

const Work = () => (
  <div>Work</div>
)

const Clients = () => (
  <div>Clients</div>
)

const Contact = () => (
  <div>Contact</div>
)

class Nav extends React.Component {

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
    //console.log(this.refs.mynav)
    //console.log(e.target)
    //console.log(e.target.parentNode)
    //console.log(e.target.parentNode.classList.contains("active"))
    //console.log(e.target.parentNode.classList)

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
      <Router>
        <div className='Nav-app'>
          <h1 className='Nav-h1'>Hover over the links</h1>
          <nav className="mynav" ref="mynav">
            <span className="target" ref="target"></span>
            <ul>
              <li><Link to='/nav/home'>Home</Link></li>
              <li><Link to='/nav/about'>About</Link></li>
              <li><Link to='/nav/company'>Company</Link></li>
              <li><Link to='/nav/work'>Work</Link></li>
              <li><Link to='/nav/clients'>Clients</Link></li>
              <li><Link to='/nav/contact'>Contact</Link></li>
            </ul>
          </nav>
          <Route path="/nav/home" component={Home}/>
          <Route path="/nav/about" component={About}/>
          <Route path="/nav/company" component={Company}/>
          <Route path="/nav/work" component={Work}/>
          <Route path="/nav/clients" component={Clients}/>
          <Route path="/nav/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}

export default Nav