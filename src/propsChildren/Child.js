import React from 'react'

class Child extends React.Component {
  state = { user: null }

  componentDidMount() {
    // We can make an ajax call here, for e.g.
    setTimeout(() => this.setState({
      user: `Task completed for ${this.props.username}: loaded`
    }), 3000);
  }

  render() {
    // Render the children with a function using state as the argument
    return this.props.children(this.state.user);
  }
}

export default Child