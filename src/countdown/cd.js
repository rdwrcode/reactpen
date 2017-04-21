import React from 'react'
import './cd.css'

export default class extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  counter() {
    const today = new Date()
    const days = this.calcDays(today)
    const hours = (days - Math.floor(days)) * 24
    const minutes = (hours - Math.floor(hours)) * 60
    const seconds = (minutes - Math.floor(minutes)) * 60

    const d = Math.floor(days)
    const h = Math.floor(hours)
    const m = Math.floor(minutes)
    const s = Math.floor(seconds)

    this.setState({
      days: d, 
      hours: h, 
      minutes: m, 
      seconds: s
    })
  }

  calcDays(currentDate) {
    // create a date object as the end reference
    // calculate the difference between currentDate and the reference
    const setDate = new Date("May 6, 2017");
    const currentTime = currentDate.getFullYear() + 1;
    setDate.setFullYear(currentTime);
    const days = (setDate - currentDate) / (1000 * 60 * 60 * 24);
    return days;
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.counter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='cd-container'>
        <form className='countdown'>
          <input size="4" className="daysLeft" value={this.state.days}/>
          <hr className="soft"/>
          <h3>Days</h3>
          <hr className="soft"/>
          <span className="bottom_time"><input size="3"  className="hrLeft" value={this.state.hours}/></span>
          <span className="bottom_time"><input size="3"  className="minLeft" value={this.state.minutes}/></span>
          <span className="bottom_time"><input size="3"  className="secLeft" value={this.state.seconds}/></span>
          <ul>
            <li>Hrs</li>
            <li>Min</li>
            <li>Sec</li>
          </ul>
        </form>
      </div>
    )
  }
}