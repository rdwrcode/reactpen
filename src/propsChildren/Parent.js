import React from 'react'
import Child from './Child'

const Loading = () => <p>Loading...</p>

const Profile = (props) => <p>{props.info}</p>

export default () => (
  <div>
    <hr />
    <h2>Render callback pattern</h2>
    <h3>Component Child has two states, so two different sub-compoents.</h3>
    <Child username='reader'>
      {user => user === null
      ? <Loading />
      : <Profile info={user} />}
    </Child>
    <hr />
  </div>
)