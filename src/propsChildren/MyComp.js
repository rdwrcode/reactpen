import React from 'react'

class MyComp extends React.Component { 
  render() {
    return (
      <div>
        {this.props.children('Scuba Steve')}
      </div>
    )
  }
}

MyComp.propTypes = {
  children: React.PropTypes.func.isRequired,
}

export default MyComp