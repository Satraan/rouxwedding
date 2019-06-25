import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import image from '../assets/registry.jpg';
const Registry = (props) => {


  return (
    <div>
    <Card
      image={image}
      header='Wedding Registry'
      description='View our wedding registry.'
    />
    </div>
  )
}


export default Registry
