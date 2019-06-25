import React from 'react'
import storyBanner from '../assets/Banner1.jpg';
import registryBanner from '../assets/registry.jpg';
import eventBanner from '../assets/church.jpg';

import NavigationCard from '../NavigationCard/NavigationCard.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon, Segment, Grid, Image, Card, Button } from 'semantic-ui-react'
const Home = (props) => {

  var sectionStyle = {
    backgroundImage: "url(" + storyBanner + ")",
    backgroundSize: "contain",
    height: "30em",
    width:"30em"
  };

  return (
    <div className="component--home">
      <Card.Group centered>
        <NavigationCard
          header="Our Story"
          background={storyBanner}
          link="/registry"
        />

        <NavigationCard
          header="Event Information"
          background={eventBanner}
          link="/registry"
        />

        <NavigationCard
          header="Wedding Registry"
          background={registryBanner}
          link="/registry"
        />
    </Card.Group>



    </div>
  )
}


export default Home
