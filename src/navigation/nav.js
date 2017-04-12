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
    
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
  }

  mouseEnterHandler(e) {
    //console.log(this.refs.mynav)
    //console.log(e.target)
  }

  clickHandler(e) {
    //e.preventDefault()
  }

  resizeHandler() {
    const active = document.querySelector(".mynav li.active");

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;

      this.target.style.left = `${left}px`;
      this.target.style.top = `${top}px`;
    }
  }

  componentWillReceiveProps(next) {
    this.setState(this.getComputedDimensions(next));
  }

  componentDidMount() {
    //
    const target = this.refs.target
    const links = document.querySelectorAll(".mynav li");
    this.setState({
      target: target,
      links: links
    })

    // add resize handler
    window.addEventListener("resize", this.resizeHandler)
    // add click and mouse enter handlers
    /*
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", this.clickHandler);
      links[i].addEventListener("mouseenter", this.mouseEnterHandler);
    }
    */
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
    /*
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].removeEventListener("click", this.clickHandler);
      this.links[i].removeEventListener("mouseenter", this.mouseEnterHandler);
    }
    */
  }

  render() {
    return (
      <Router>
        <div className='Nav-app'>
          <h1 className='Nav-h1'>Hover over the links</h1>
          <nav className="mynav" ref="mynav">
            <ul>
              <li><Link to='/nav/home'>Home</Link></li>
              <li><Link to='/nav/about'>About</Link></li>
              <li><Link to='/nav/company'>Company</Link></li>
              <li><Link to='/nav/work'>Work</Link></li>
              <li><Link to='/nav/clients'>Clients</Link></li>
              <li><Link to='/nav/contact'>Contact</Link></li>
            </ul>
            <Route path="/nav/home" component={Home}/>
            <Route path="/nav/about" component={About}/>
            <Route path="/nav/company" component={Company}/>
            <Route path="/nav/work" component={Work}/>
            <Route path="/nav/clients" component={Clients}/>
            <Route path="/nav/contact" component={Contact}/>
          </nav>
           
          <span className="target" ref="target"></span>
        </div>
      </Router>
    )
  }
}

export default Nav