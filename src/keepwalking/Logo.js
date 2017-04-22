import React from 'react'

export default class Logo extends React.Component {
 
  animateIn() {
    this.tl = new TimelineMax();
    const letters = [...this.letters.childNodes].reverse();
    
    // initial settings
    this.tl.set(this.background, { scale: 0.8, opacity: 0, transformOrigin: 'center center' });
    this.tl.set(this.mmtText, { scaleX: 0, transformOrigin: 'left center'  })
    this.tl.set(this.icon, { y: 80, skewX: -200, scale: 0, transformOrigin: 'bottom center' });
    this.tl.set(letters, { opacity: 0 });
    
    // animate in
    this.tl.to(this.background, 0.8, { scale: 1, opacity: 1, ease: Elastic.easeOut.config(1, 0.6) }, 0);
    this.tl.to(this.icon, 0.6, { y: 20, skewX: 0, scale: 1, ease: Back.easeOut.config(1.4) }, '+=0');
    this.tl.to(this.mmtText, 0.6, { scaleX: 1, ease: Sine.easeInOut }, '+=0.4');
    this.tl.staggerTo(letters, 0.4, { opacity: 1, ease: Sine.easeInOut }, 0.05, '+=0.2');
  }
  
  reverseAnimation() {
    this.tl.reverse();
  }
  
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width}  height={this.props.height} viewBox="0 0 245 245" className="mmt-logo" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="clip-path" transform="translate(-83.31 -65.28)">
          <path id="clip-mmt" fill="none" d="M255.74 187.7h7.58v-1.67h-7.05l4.29-15a13.39 13.39 0 0 0 .55-4.56 12.55 12.55 0 0 0-.94-4.18A10.47 10.47 0 0 0 258 159a8.14 8.14 0 0 0-3.45-2l-.88-.17a5.2 5.2 0 0 0-.93-.09h-.23l-14.38 49.15v.21l-2.22 7.77a2.82 2.82 0 0 1-1.32 1.58 2.53 2.53 0 0 1-1.95.23 3 3 0 0 1-1.63-1.32 2.17 2.17 0 0 1-.18-2l8-27.73a4.62 4.62 0 0 1 .25-.82c.06-.22.11-.46.17-.72a3.7 3.7 0 0 0 .09-.77 7 7 0 0 0-.69-3.09 8.67 8.67 0 0 0-1.9-2.55 9.06 9.06 0 0 0-2.84-1.77 9.56 9.56 0 0 0-3.52-.65 10.62 10.62 0 0 0-6 1.55 8.09 8.09 0 0 0-3 4.24 8.31 8.31 0 0 0-2.73-3.77 9.31 9.31 0 0 0-6-2 10 10 0 0 0-6 1.6 8.8 8.8 0 0 0-3 4.25 7.89 7.89 0 0 0-2.73-3.83 9.46 9.46 0 0 0-6.06-2c-4.16 0-7 1.6-8.53 4.77a7.16 7.16 0 0 1-.36.76l-.09.18a8.31 8.31 0 0 0-2.69-3.68 9.31 9.31 0 0 0-6-2 10 10 0 0 0-6 1.6 8.83 8.83 0 0 0-3 4.25 7.9 7.9 0 0 0-2.72-3.83 9.48 9.48 0 0 0-6.06-2c-4.16 0-7 1.6-8.52 4.77a6.78 6.78 0 0 1-.36.76 4.78 4.78 0 0 0-.4 1.11l-1.77 6.37h1.29l1.66-6a2.5 2.5 0 0 1 .4-.93 7.38 7.38 0 0 1 .57-.65 3 3 0 0 1 2.37-.37c1.73.56 2.25 1.79 1.63 3.86l-6.15 21.21a12.38 12.38 0 0 0-.51 4.52 13.86 13.86 0 0 0 .94 4.13 9.93 9.93 0 0 0 2.19 3.35 8.05 8.05 0 0 0 3.39 2 4.74 4.74 0 0 0 .94.27 2.67 2.67 0 0 0 1 0h.19l10.86-37.44a2.61 2.61 0 0 1 1.48-1.76 2.36 2.36 0 0 1 1.78-.12c1.65.55 2.16 1.81 1.54 3.86l-6.16 21.13a12.66 12.66 0 0 0-.51 4.56 13.22 13.22 0 0 0 1 4.17 10.09 10.09 0 0 0 2.27 3.35 8.39 8.39 0 0 0 3.45 2 5.31 5.31 0 0 0 1.68.27h.23l10.72-36.91a1.12 1.12 0 0 0 0-.16l.11-.35a2.52 2.52 0 0 1 .4-.93 7.35 7.35 0 0 1 .57-.65 3 3 0 0 1 2.37-.37c1.73.56 2.25 1.79 1.63 3.86l-6.16 21.21A12.51 12.51 0 0 0 185 209a14 14 0 0 0 .94 4.13 9.92 9.92 0 0 0 2.19 3.35 8 8 0 0 0 3.39 2 4.77 4.77 0 0 0 .93.27 2.67 2.67 0 0 0 1 0h.19l10.86-37.44a2.62 2.62 0 0 1 1.48-1.76 2.36 2.36 0 0 1 1.78-.12c1.66.55 2.16 1.81 1.55 3.86l-6.16 21.13a12.71 12.71 0 0 0-.51 4.56 13.27 13.27 0 0 0 1 4.17 10.1 10.1 0 0 0 2.27 3.35 8.41 8.41 0 0 0 3.45 2 5.28 5.28 0 0 0 1.68.27h.23l10.72-36.92a3.77 3.77 0 0 1 1.38-2.12 2.18 2.18 0 0 1 2-.41 2.29 2.29 0 0 1 1.71 1.35 4.1 4.1 0 0 1-.09 2.59l-7.24 25.21a6.24 6.24 0 0 0-.09 3.11 8.87 8.87 0 0 0 1.21 2.84 9.16 9.16 0 0 0 2.24 2.37 9.69 9.69 0 0 0 3.17 1.55 10.36 10.36 0 0 0 6.61-.21 7.45 7.45 0 0 0 2.52-1.56 5.73 5.73 0 0 0 1.5-2.34L238 210a10 10 0 0 0 1.45 3.34 11.43 11.43 0 0 0 2.91 3 13.84 13.84 0 0 0 4 2 11.85 11.85 0 0 0 3.63.58h.69a13.08 13.08 0 0 0 4.09-.9 11 11 0 0 0 3.34-2.05 6.73 6.73 0 0 0 2-3.06l1.24-4.43-1-.4-1.24 4.46a5.55 5.55 0 0 1-2 2.44 4.69 4.69 0 0 1-2.69.86h-.24a5.24 5.24 0 0 1-4.94-5.1 4.23 4.23 0 0 1 .32-1.58z"/>
        </clipPath>
      </defs>
      <circle ref={(b) => (this.background = b)} cx="122.5" cy="122.5" r="118" fill={this.props.background}/>
      <path ref={(b) => (this.icon = b)} fill="#fff" d="M122.5 101.08a3.24 3.24 0 1 0 3.24 3.24 3.25 3.25 0 0 0-3.24-3.24zm0 4.86a1.62 1.62 0 1 1 1.62-1.62 1.62 1.62 0 0 1-1.62 1.63zM76.3 94.62h92.39a.81.81 0 0 0 .81-.81V40.32a.81.81 0 0 0-.81-.81h-92.4a.81.81 0 0 0-.81.81v53.5a.81.81 0 0 0 .82.81zM167.89 93H80.35V41.13h87.54v51.88zm-89.2-51.87v51.88h-1.62v-3.29h.81a.81.81 0 1 0 0-1.62h-.81v-3.24h.81a.81.81 0 1 0 0-1.62h-.81V80h.81a.81.81 0 1 0 0-1.62h-.81v-3.24h.81a.81.81 0 1 0 0-1.62h-.81v-3.24h.81a.81.81 0 1 0 0-1.62h-.81v-3.24h.81a.81.81 0 1 0 0-1.62h-.81v-3.24h.81a.81.81 0 1 0 0-1.62h-.81v-3.22h.81a.81.81 0 0 0 0-1.62h-.81v-3.24h.81a.81.81 0 0 0 0-1.62h-.81V46h.81a.81.81 0 0 0 0-1.62h-.81v-3.24zm90-6.48h-92.4a5.68 5.68 0 0 0-5.67 5.67v68.06a5.61 5.61 0 0 0 5.67 5.67h34.66l-2.88 13h-1.78a.81.81 0 0 0 0 1.62h32.4a.81.81 0 0 0 0-1.62h-1.79l-2.88-13h34.67a5.61 5.61 0 0 0 5.67-5.67V40.32a5.68 5.68 0 0 0-5.67-5.67zm0 74.57h-92.4a4.06 4.06 0 0 1-4.05-4.05v-5.7h100.52v5.7a4.06 4.06 0 0 1-4.07 4.05zm-92.4-73h92.4a4.06 4.06 0 0 1 4.05 4.05v57.52H72.25V40.32a4.06 4.06 0 0 1 4.05-4.05zm59 90.76h-25.55l2.88-13h19.75zm33.4-14.54h-92.4a4 4 0 0 1-4-3.23 5.65 5.65 0 0 0 4 1.63h92.4a5.65 5.65 0 0 0 4-1.63 4 4 0 0 1-4 3.23zM84.39 46h6.48a.81.81 0 0 0 0-1.62h-6.48a.81.81 0 1 0 0 1.62zm13 4.86h22.7a.81.81 0 0 0 0-1.62h-22.7a.81.81 0 0 0 0 1.62zm-12.16-.81a.81.81 0 0 0 .81.81h8.11a.81.81 0 0 0 0-1.62h-8.11a.81.81 0 0 0-.82.81zm32.42 4.86a.81.81 0 0 0 .81.81h21.07a.81.81 0 0 0 0-1.62h-21.08a.81.81 0 0 0-.81.81zm25.13.81h6.48a.81.81 0 0 0 0-1.62h-6.48a.81.81 0 0 0 0 1.62zm-27.56-1.62H87.69a.81.81 0 1 0 0 1.62h27.56a.81.81 0 0 0 0-1.62zM87.69 65.45h4.86a.81.81 0 1 0 0-1.62h-4.86a.81.81 0 1 0 0 1.62zm33-.81a.81.81 0 0 0-.81-.81H95.75a.81.81 0 1 0 0 1.62h24.06a.81.81 0 0 0 .82-.81zm5.93-5.67H89.27a.81.81 0 1 0 0 1.62h37.29a.81.81 0 0 0 0-1.62zm-16.21 11.35H125a.81.81 0 1 0 0-1.62h-14.66a.81.81 0 0 0 0 1.62zm-25.13 4.05a.81.81 0 0 0 .81.81h27.5a.81.81 0 0 0 0-1.62H86.03a.81.81 0 0 0-.81.8zm13.78 8.92h-13a.81.81 0 1 0 0 1.62h13a.81.81 0 0 0 0-1.62zm32.42-4.86h-22.79a.81.81 0 1 0 0 1.62h22.7a.81.81 0 1 0 0-1.62zm4.86 0h-1.65a.81.81 0 0 0 0 1.62h1.62a.81.81 0 0 0 0-1.62zm-30.8 0H87.69a.81.81 0 1 0 0 1.62h17.83a.81.81 0 0 0 0-1.62zm-14.59 9.73h-6.48a.81.81 0 1 0 0 1.62h6.48a.81.81 0 1 0 0-1.62zm25.94-13h9.73a.81.81 0 0 0 0-1.62h-9.73a.81.81 0 0 0 0 1.62zm22.7-6.48h-11.41a.81.81 0 0 0 0 1.62h11.35a.81.81 0 0 0 0-1.62zm-51.9 1.63h19.45a.81.81 0 0 0 0-1.62H87.69a.81.81 0 1 0 0 1.62z" opacity=".19"/>
    <g ref={(b) => (this.letters = b)} id="letters" fill={this.props.text}>
      <path id="y" d="M177.63 187.51h-.77a.36.36 0 0 0-.26.15l-3.33 4.6-3.33-4.6a.36.36 0 0 0-.26-.15h-.78a.31.31 0 0 0-.26.48l4 5.5v5.23a.31.31 0 0 0 .31.31h.65a.32.32 0 0 0 .31-.31v-5.25l4-5.49a.31.31 0 0 0-.27-.48z"/>
      <path id="g" d="M167.23 193.77h-2.85a.3.3 0 0 0-.31.29v.66a.3.3 0 0 0 .3.3h1.9v2.31a6.2 6.2 0 0 1-3 .69 4.75 4.75 0 0 1 0-9.49 5 5 0 0 1 3.13 1.29c.18.16.28.18.43 0s.31-.31.46-.46a.32.32 0 0 0 0-.45 5.8 5.8 0 0 0-4-1.53 5.93 5.93 0 0 0 0 11.86 8.13 8.13 0 0 0 4.07-1.09.41.41 0 0 0 .13-.26v-3.77a.31.31 0 0 0-.26-.35z"/>
      <path id="o" d="M149.75 187.35a5.91 5.91 0 1 0 .07 0zm0 10.71a4.78 4.78 0 1 1 4.78-4.78 4.78 4.78 0 0 1-4.78 4.78z"/>
      <path id="l" d="M142.76 197.94h-4.75v-10.11a.32.32 0 0 0-.31-.31h-.64a.31.31 0 0 0-.31.31v10.89a.31.31 0 0 0 .31.31h5.7a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.31z"/>
      <path id="o-2" d="M128.28 187.35a5.91 5.91 0 1 0 .07 0zm0 10.71a4.78 4.78 0 1 1 4.78-4.78 4.78 4.78 0 0 1-4.78 4.78z" data-name="o"/>
      <path id="n" d="M119.53 187.51h-.58a.31.31 0 0 0-.31.31v8.78l-7.43-9.26h-.41a.31.31 0 0 0-.31.3v11.08a.32.32 0 0 0 .31.31h.58a.31.31 0 0 0 .31-.31v-9l7.56 9.44h.3a.31.31 0 0 0 .31-.3v-11.03a.32.32 0 0 0-.33-.32z"/>
      <path id="h" d="M106.76 187.51h-.64a.31.31 0 0 0-.31.31v4.81h-6.69v-4.81a.31.31 0 0 0-.31-.31h-.64a.32.32 0 0 0-.31.31v10.9a.32.32 0 0 0 .31.31h.64a.31.31 0 0 0 .31-.31v-5h6.69v5a.31.31 0 0 0 .31.31h.64a.32.32 0 0 0 .31-.31v-10.89a.32.32 0 0 0-.31-.32z"/>
      <path id="c" d="M94.83 196.72a.31.31 0 0 0-.4 0 4.69 4.69 0 1 1-3.15-8.24 5 5 0 0 1 3.15 1.24c.16.17.3.18.43 0l.44-.45a.32.32 0 0 0 0-.45 5.79 5.79 0 0 0-4-1.53 5.93 5.93 0 1 0 0 11.86 5.65 5.65 0 0 0 4-1.6.31.31 0 0 0 0-.44z"/>
      <path id="e" d="M83.29 187.51h-6.5a.31.31 0 0 0-.31.31v10.9a.31.31 0 0 0 .31.31h6.49a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.31h-5.54v-4.21h4.73a.31.31 0 0 0 .31-.31v-.48a.33.33 0 0 0-.31-.31h-4.73v-4h5.54a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.31z"/>
      <path id="t" d="M74.35 187.51h-7a.31.31 0 0 0-.31.31v.48a.31.31 0 0 0 .31.31h2.87v10.11a.32.32 0 0 0 .31.31h.63a.32.32 0 0 0 .31-.31v-10.1h2.87a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.32z"/>
      <path id="a" d="M160.77 180.31h.66a.3.3 0 0 0 .28-.18l1.2-2.72h5.85l1.22 2.72a.3.3 0 0 0 .28.18h.66a.29.29 0 0 0 .28-.43l-5-11.09a.29.29 0 0 0-.28-.18h-.17a.29.29 0 0 0-.28.18l-5 11.09a.29.29 0 0 0 .28.43zm5-9.32h.13c.81 1.8 1.6 3.61 2.41 5.4h-4.94z"/>
      <path id="i" d="M157.69 168.78h.66a.31.31 0 0 1 .31.31v10.9a.31.31 0 0 1-.31.31h-.66a.31.31 0 0 1-.31-.31v-10.9a.31.31 0 0 1 .31-.31z"/>
      <path id="d" d="M145.4 180.31h3.69a5.77 5.77 0 1 0 .27-11.53h-4a.31.31 0 0 0-.3.31V180a.31.31 0 0 0 .34.31zm1-10.41h2.47a4.48 4.48 0 0 1 4.66 4.3v.33a4.49 4.49 0 0 1-4.32 4.65h-2.81z"/>
      <path id="e-2" d="M142.45 180v-.48a.31.31 0 0 0-.31-.31h-5.54v-4.2h4.73a.31.31 0 0 0 .36-.29v-.48a.32.32 0 0 0-.31-.31h-4.73v-4h5.54a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.31h-6.5a.31.31 0 0 0-.31.31v10.91a.31.31 0 0 0 .31.31h6.49a.31.31 0 0 0 .31-.31z" data-name="e"/>
      <path id="m" d="M123.05 171.59l3.06 8.7a.34.34 0 0 0 .28.18h.3a.33.33 0 0 0 .28-.18l3-8.7h.07l1.47 8.48a.34.34 0 0 0 .3.23h.66c.25 0 .35-.17.3-.4l-2.08-11.06a.32.32 0 0 0-.3-.23h-.26a.31.31 0 0 0-.28.18l-3.21 9.08h-.08l-3.26-9.08a.31.31 0 0 0-.28-.18h-.33a.32.32 0 0 0-.3.23l-2.13 11.07c0 .23 0 .4.3.4h.66a.32.32 0 0 0 .3-.23l1.43-8.48z"/>
      <rect id="i-2" width="1.28" height="11.53" x="116.47" y="168.77" data-name="i" rx=".31" ry=".31"/>
      <path id="t-2" d="M111.16 180.31a.32.32 0 0 0 .31-.31v-10.12h2.87a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.31h-7a.31.31 0 0 0-.31.31v.48a.31.31 0 0 0 .31.31h2.87V180a.32.32 0 0 0 .31.31z" data-name="t"/>
      <path id="l-2" d="M107.24 179.21h-4.75v-10.12a.32.32 0 0 0-.31-.31h-.64a.31.31 0 0 0-.31.31V180a.31.31 0 0 0 .31.31h5.7a.31.31 0 0 0 .31-.31v-.48a.31.31 0 0 0-.31-.31z" data-name="l"/>
      <path id="u" d="M98 169.09a.32.32 0 0 0-.31-.31h-.63a.31.31 0 0 0-.31.31v6.9a3.12 3.12 0 1 1-6.23 0v-6.87a.31.31 0 0 0-.31-.31h-.63a.32.32 0 0 0-.31.31v7a4.37 4.37 0 0 0 8.73.19v-.19z"/>
      <path id="m-2" d="M85.91 180.31h.66c.25 0 .35-.17.3-.4l-2.13-11.07a.32.32 0 0 0-.3-.23h-.26a.31.31 0 0 0-.28.18l-3.21 9.08h-.08l-3.26-9.08a.31.31 0 0 0-.28-.18h-.26a.32.32 0 0 0-.3.23l-2.12 11.07c0 .23 0 .4.3.4h.66a.32.32 0 0 0 .3-.23l1.43-8.48h.07l3.07 8.7a.33.33 0 0 0 .28.18h.3a.33.33 0 0 0 .28-.18l3-8.7h.07l1.47 8.48a.34.34 0 0 0 .29.23z" data-name="m"/>
    </g>
    <g id="mmt" clipPath="url(#clip-path)">
      <rect ref={(b) => (this.mmtText = b)} x="60" y="90" width="120" height="80" fill={this.props.text} />
    </g>
  </svg>
    );
  }
}