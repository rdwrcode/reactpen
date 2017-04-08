import React from 'react'

class Ratio extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasComputed: false,
      width: 0,
      height: 0, 
    };
    this.handleResize = this.handleResize.bind(this);
  }

  getComputedDimensions({x, y}) {
    const {width} = this.refs.container.getBoundingClientRect();
    return {
      width,
      height: width * (y / x), 
    };
  }

  componentWillReceiveProps(next) {
    this.setState(this.getComputedDimensions(next));
  }

  componentDidMount() {
    this.setState({
      ...this.getComputedDimensions(this.props),
      hasComputed: true,
    });
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize() {
    this.setState({
      hasComputed: false,
    }, () => {
      this.setState({
        hasComputed: true,
        ...this.getComputedDimensions(this.props),
      });
    });
  }

  // just return {this.props.children()}
  // now 
  render() {
    return (
      <div ref='container'>
        {this.props.children(this.state.width, this.state.height, this.state.hasComputed)}
      </div>
    );
  }
}

Ratio.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
 children: React.PropTypes.func.isRequired,
};

Ratio.defaultProps = {
  x: 480,
  y: 320
}

export default Ratio