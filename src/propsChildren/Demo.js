import React from 'react'

// check ListComp, React.Children.map
const ListComponent = (props) => {
  const children = React.Children.map(props.children, (child, uid) => <li key={uid}>{child}</li>)
  return <ul>{children}</ul>
} 

const middleChildren = [
  <strong key="2">Child 2</strong>,
  <a href="#" key="3">Child 3</a>
]

export default () => (
  <ListComponent>
    <span>Child 1</span>
    {middleChildren}
    <em>Child 4</em>
  </ListComponent>
)