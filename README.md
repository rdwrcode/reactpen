# ReactPen: Interesting stuff written in React

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
