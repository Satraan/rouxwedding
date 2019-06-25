import React from 'react'
import { Item, Icon, Segment, Grid, Image, Card, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const BannerSegment = (props) => {

  var sectionStyle = {
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    width:"100%",
    minHeight:"40vh"
  };

  return (
    <Item.Group divided>
       <Item>
         <Item.Image src={props.background} />
         <Item.Content verticalAlign="middle">
              <Item.Header>
                <h2>{props.header}</h2>
              </Item.Header>
              <Item.Description>
                {props.text}
              </Item.Description>
         </Item.Content>
       </Item>
     </Item.Group>
  )
}


export default BannerSegment
