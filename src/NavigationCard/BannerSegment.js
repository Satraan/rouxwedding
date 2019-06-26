import React from 'react'
import { Item, Icon, Segment, Grid, Image, Card, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const BannerSegment = (props) => {

  var sectionStyle = {
    backgroundImage: "url(" + props.background + ")",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    width:"100%",
    minHeight:"40vh"
  };

  return (
       <Item style={sectionStyle}>
         <Item.Content verticalAlign="middle">
              <Item.Header>
                <h2>{props.header}</h2>
              </Item.Header>
              <Item.Description>
                {props.text}
              </Item.Description>
         </Item.Content>
       </Item>
  )
}


export default BannerSegment
