import React from 'react';
import logo from './logo.svg';
import './About.css';

export default () => (
  <div className="About">
    <div className="About-header">
      <img src={logo} className="About-logo" alt="logo" />
      <h2>Welcome to ReactPen</h2>
      <h3>Interesting stuff coded in React</h3>
    </div>
    <p className="About-intro">
    </p>
  </div>
)