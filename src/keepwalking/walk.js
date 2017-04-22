/* global TweenLite */ 
/* global Sine */
/* global TimelineMax */
/* global TimelineLite */
import React from 'react'
import ReactDOM from 'react-dom'
import './walk.css'

export default class extends React.Component {
  constructor(props, context) {
    super(props)
    console.log(context)

  }

  componentDidMount() {
    //const Doc = document
    const TwL = TweenLite
    const E0 = Sine.easeInOut
    const E1 = Sine.easeIn
    const E2 = Sine.easeOut
    
    //const B = Doc.getElementById('B')
    //const UB = Doc.getElementById('UB')
    //const F = Doc.getElementById('FF')
    //const H = Doc.getElementById('HF')

    const B = ReactDOM.findDOMNode(this.refs.B)
    const UB = ReactDOM.findDOMNode(this.refs.UB)
    const F = ReactDOM.findDOMNode(this.refs.FF)
    const H = ReactDOM.findDOMNode(this.refs.HF)
    //const F2 = ReactDOM.findDOMNode(this.refs.FB)
    //const H2 = ReactDOM.findDOMNode(this.refs.HB)

    TwL.set('svg',{opacity:1});
    TwL.set(B,{y:10});
    TwL.set(UB,{fill:'#151515',transformOrigin:'50% 100%'});
    TwL.set(H,{transformOrigin:'-5px 0px',rotation:-10,fill:'#454545',y:-1});
    TwL.set(F,{transformOrigin:'55% 10px',rotation:-37,fill:'#DC0026'});
    TwL.set('#H',{transformOrigin:'5px 50px',fill:'#454545',scale:0.967,rotation:-5});
    TwL.set('.H1',{rotation:-20,transformOrigin:'0px 5px',y:-5});
    TwL.set('.H2',{transformOrigin:'10% 0%',rotation:-10,y:-1.5,scaleY:1.03});
    TwL.set('.F1',{transformOrigin:'21px 2px'});
    TwL.set('.F2',{transformOrigin:'25px 0px'});
    TwL.set('.F3',{transformOrigin:'4.2px 4.2px'});

    /* FB same as FF */
    /* HB same as HF */
    const F2 = F.cloneNode(true)
    const H2 = H.cloneNode(true)
    F2.id = 'FB'
    H2.id = 'HB'

    B.insertBefore(F2,UB)
    B.insertBefore(H2,F2) 
    TwL.set('.FB',{fill:'#DC0026'});
    TwL.set('#FB',{fill:'#A50018'});
    TwL.set('#HB',{y:-3,fill:'#333'});

    function M(p1,p2){
      const tl = new TimelineMax({repeat:-1})

      tl.add("l1",0).add("l2",.25).add("l3",.5).add("l4",.75).add("l5",1).to(p1,.5,{rotation:27,ease:E0},'l1').to(p1,.25,{rotation:-37,ease:E1},'l3').to(p1+' .F1',.25,{rotation:15,ease:E0},'l2').to(p1+' .F1',.25,{rotation:80,ease:E1},'l3').to(p1+' .F1',.25,{rotation:0,ease:E2},'l4').to(p1+' .F2',.25,{rotation:45,repeat:1,yoyo:true},'l3').to(p1+' .F3',.25,{rotation:-35,repeat:1,yoyo:true,scaleX:.925},'l2').to(p2,.5,{rotation:25,ease:E0,yoyo:true,repeat:1},'l1').to(p2+' .H1',.5,{rotation:15,ease:E0,yoyo:true,repeat:1},'l1').to(p2+' .H2',.5,{rotation:0,ease:E0,yoyo:true,repeat:1},'l1')

      return tl
    }

    const MTl = new TimelineLite()

    MTl.add(M('#FF','#HB')).add(M('#FB','#HF'),0.5).to(B,.25,{y:'+='+-20,repeat:-1,yoyo:true,ease:E0},0).to('#H',.25,{rotation:1,repeat:-1,yoyo:true,ease:E0},0).to('#mSH',.25,{scaleX:.6,repeat:-1,yoyo:true,ease:E1,transformOrigin:'center'},0).time(.5);
    /* a Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW */
  }

  render() {
    return (
      <div className='walk'>
        <div id="text"><span>No Matter How Hard it is ,</span> Just Keep Going</div>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="325" height="325" viewBox="15 0 315 315">
          <circle fill="white" cx="172" cy="165" r="150" stroke='rgba(255,255,255,.4)' stroke-width='30'/>
          <ellipse id="mSH" opacity='.2' cx="175" cy="313" rx="110" ry="10"/>
          <g id="B" ref='B'>
            <g id="UB" ref='UB'>
              <g id="H" ref='H'>
                <path d="M188.8.2c-9.1-.3-16.2 7.3-16.2 15.4 0 8.9 7.2 13.8 7.2 13.8s1.3 3.8 0 6.9c-2.1 4.8-6.6 11.1-6.6 11.1l17.6 8.9s-3.8-8.4-2.2-13.8c.8-2.9 4.7-3.5 6.9-3.1 3.8 3.7 7.7 5.5 9.1 4.6 1.9-1.2 4.9-18.4 4.5-26.8-.4-8.5-9.5-16.3-20.3-17z"/>
                <g fill='none' stroke='#fff' opacity='0.4'>
                  <path d="M191.1.3s4 4.4 4.9 17.9-.9 21-.9 21"/>
                  <path d="M172.6 16.2s8.2 2.1 19.2 2.4c11.5.3 17.4-1.5 17.4-1.5"/>
                </g>
                <g fill='none' stroke='#fff' opacity='0.7' stroke-linecap='round' stroke-width='3' >
                  <path className="st4" d="M181,7.1c-0.8,0.7-1.6,1.4-2.2,2.3"/>
                  <path className="st4" d="M198.6,7.6c-4.1-2.8-9.3-4.3-14-2.6"/>
                </g>
              </g>
              <path d="M196.9 83.1c-1.6 8-2.9 14.6-2.9 14.6l-4.9 46.1-21.9-7.7 3.4-11c.7-3.7.9-8.5.4-12.3-4.272-29.697-8.373-41.774-5.7-52.182 2.043-6.93 9.2-17.518 9.2-17.518s3.7 1.4 6.6 2.2c3.5 1.2 8.3 2.9 8.3 2.9s10 21.9 7.5 34.9z"/>
              <path className="FB" d="M167.5 132.7c-9 18.6 6.4 27.6 10.6 27.6 6 0 11.8-9.2 12.3-24.1l-22.9-5.7v2.2z"/>
            </g>
            <g id="FF" ref='FF'>
              <path d="M169.2 223.345c.1-.21-.4-2.11 1.4-20.466-1.9-15.51-4.6-39.88-1.2-52.86 2.9-12.66 16.7-15.83 19.1-1.588.4 11.183.4 15.51-2 35.66-4.6 23.313-9.7 39.243-9.8 40.09-.1.525-2.2 2.32-4.4 2.002-1.7.104-3.3-2.217-3.1-2.85z"/>
              <g className="F1">
                <path d="M162.9 307.954s1.2-11.393.3-24.264c-.5-9.284-5.8-30.594-4.7-38.93 6.8-18.777 13.6-23.42 16.4-22.26 1.1.95 1.9 2.322 1.3 4.01-.1.106-3.8 23.632-6 40.3-2.3 18.04.7 41.144.7 41.144h-8z"/>
                <g className="F2">
                  <path d="M192.2 316.183s-25.4-16.985-28.8-14.242c-1.4 6.65-11.8 19.1-2.9 22.9 3.3 1.27 7-1.16 8.3-1.37 6.3-1.16 19.1 1.48 20.2 1.48 2.8 0 5.1-1.687 5.1-4.64 0-1.69-.8-3.27-1.9-4.116z"/>
                  <path className="F3" d="M191.7 315.867s-1.5-.528-2.3-.528c-2.6 0-4.6 2.11-4.6 4.85 0 2.42 1.7 4.53 4.1 4.75 0 0 17 .95 17.3-2.64.3-3.38-7.5-2.85-14.5-6.44z"/>
                </g>
              </g>
            </g>
            <path fill='#333' d="M191.1 49.9l-18.9-3.7c-.9-.1-1.2-1.1-.6-1.6l1.9-2.3c.2-.3.7-.4 1.1-.3l16.7 5.7c-.1-.1-.2 2.2-.2 2.2z"/>
            <g id="HF" ref='HF'>
              <path d="M179.9 111.275c.5-1.88 7.2-21.42 6.3-36.154 4.4-10.76 2-18.49.7-21.42-3.1-7-13.2-5.74-14.6 4.29-.5 3.66-1.5 10.87 2 19.33-2.6 17.24.7 31.87.9 33.96s4.1 1.988 4.7 0"/>
              <g className="H1">
                <path d="M185 122.56c-.5-3.135-4.4-17.137-8.8-16.3-2.1.417-3.3 12.016-3.3 12.016 1.5 11.39 6.533 25.093 10.333 35.96l4.567-.852c.2 0-2.5-14.628-2.8-30.824z"/>
                <path className="H2" d="M186.87 152.17c-1 .11-2.9.774-4 .885-.6.11-2 4.318-2.8 7.308-.4 1.44-1 8.083-1 9.633l.4 6.312s1.5 5.315 1.8 5.98c.5 1.55 1.4.664 1.4.664s1.3 3.22 1.4 3.55c.3.67.8.89 1.3.78 2.3-.44-.1-5.09-.9-7.192.2-1.44-.3-4.872-.3-4.872s1 6.2 1.1 6.756c.1 1.77 2.1 4.87 2.4 5.87.1.995 1.6 1.327 2.4.44 1.7-1.88-1.8-6.53-1.8-6.53.4-2.216-.7-7.53-.7-7.53s1.5 9.52 2.2 11.736c.1.333 1.1 4.984 1.3 5.205.3.554 1 .554 1.5.333 2.2-1.33.7-6.866.2-7.862-.1-.33-.1-4.32-.7-7.75.15-4.882-.227-5.843-.8-7.64s.9 3.544 1.5 4.54c.04 4.22 2.277 7.61 4.355 6.67.8-.663.19-5.314-.555-8.552l-2.4-7.525c.2.33-6.2-11.3-7.3-11.19v-.028z"/>
              </g>
            </g>
          </g>
        </svg>

        <div id='links'>
          <a id='twitter' href="https://twitter.com/rdwrcode" target="_blank"><span className='fa fa-twitter'></span></a>
          <div id='pens'><a href="https://github.com/rdwrcode" target="_blank"><span className='fa fa-github'></span></a></div>
        </div>
      </div>
    )
  }
}
