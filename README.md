# ReactPen: Interesting stuff written in React

[live](https://rdwrcode.github.io/reactpen)

## Setup
Scaffolding with [Create React App](https://github.com/facebookincubator/create-react-app)

## setState()
Usually an object is passed to setState(). A function to setState() works too. 
the state update is asychronous.

## carousal
There are several ways to do this, some CSS techniques.

### [nuka-carousel](https://github.com/FormidableLabs/nuka-carousel)
```
npm install nuka-carousel
```
### [react-coverflow](https://github.com/andyyou/react-coverflow)
```
npm i -S react-coverflow
```

### [react-slick](https://github.com/akiran/react-slick) **NOT WORKING**
```
npm i -S react-slick slick-carousel
```
Its demo site is [here](http://neostack.com/opensource/react-slick).

## this.props.children
There are severals way to decouple the child and its parent. 
Passing a function as child component.
Try React.Children.map()
Use Higher order component: (comp) => anotherComp

## controlled vs. uncontrolled component

## [react-router v4](https://github.com/ReactTraining/react-router)

## original [weather animation with SVG](http://codepen.io/thebabydino/pen/qrzpBo)
The original is just SVG and CSS. Port it to React.
**The main difference between HTML elements and SVG elements is the local coordinate system of the element. 
For HTML elements, this coordinate system originates at the 50% 50% point of the element. 
For SVG elements, the origin is, assuming we have no transform applied on the element itself or any of its ancestors inside the <svg> element, at the 0 0 point of the SVG canvas. **

## [hover effect](http://codepen.io/tutsplus/pen/XMPQGV)
Rewrite this effect into React component. Think about how to manipulate the style in JS?
React-router or styling is affecting the hover effect somehow. 
noroute works fine.
nav can work if no click to add child component. New child component changes the layout so the span could not show up.
It has nothing to do with react-router.

## Glamorous with sibling selector
```
npm i -S glamorous
```

## [Ask DOM for color value](http://jsfiddle.net/developit/tneyp3gr/)
Input a color name, the DOM returns the rgb value of it. 

## Add a countdown timer

## GSAP with react exercise
TweenMax includes TweenLite, CSSPlugin, EasePack, TimelineLite, TimelineMax, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin.

## [preactal](https://github.com/FormidableLabs/freactal)
```
yarn add freactal
```
[codesandbox](https://codesandbox.io/) is nice to play.

## [D3v4 + React](https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71)
the challenge to combine D3 with React is that both want to control the DOM.
d3 has its own select/enter/exit/update pattern. this conflicts with react virtual DOM.

One way is to give D3 a DOM container (e.g. <svg>) and let D3 take care of it.
use react to create elements, use d3 to visualize them.

Here is the reference [repo](https://github.com/emeeks/d3_in_action_2) check ch9.
Some issues with this. Need to debug it later!!!
