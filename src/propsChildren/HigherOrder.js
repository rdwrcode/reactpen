import React from 'react'

const Loading = () => <p>Loading...</p>

const Profile = (props) => <p>Hello, {props.info}</p>

const Greeting = ({ name }) => (
  !name ? 
    <Loading /> : (
    <div>
      <Profile info={name}/>
      <hr />
    </div>
    )
)

const Connect = (InnerComp) =>
  class extends React.Component {
    constructor() {
      super()
      this.state = { name: "" }
    }

    componentDidMount() {
      // this would fetch or connect to a store
      // imagine if there is a delay due to the fetch from remote over network, 
      // then Loading will show up like Parent component.
      this.setState({ name: "Michael" })
    }

    render() {
      return (
        <InnerComp
          {...this.props}
          name={this.state.name}
        />
      )
    }
  }

  export default Connect(Greeting)
