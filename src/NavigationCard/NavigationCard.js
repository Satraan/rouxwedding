import React from 'react'
import { Icon, Segment, Grid, Image, Card, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const NavigationCard = (props) => {

  var sectionStyle = {
    backgroundImage: "url(" + props.background + ")",
    backgroundSize: "contain",
    height: "30em",
    width:"30em"
  };

  return (

    <Link to={props.link}>
        <Card style={sectionStyle}>
          <Card.Content>
            <Card.Header>{props.header}</Card.Header>
          </Card.Content>
        </Card>
      </Link>

  

  )
}


export default NavigationCard
