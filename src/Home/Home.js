import React from 'react'
import storyBanner from '../assets/Banner1.jpg';
import registryBanner from '../assets/registry.jpg';
import eventBanner from '../assets/church.jpg';
import BannerSegment from '../NavigationCard/BannerSegment.js';
import NavigationCard from '../NavigationCard/NavigationCard.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Item, Icon, Segment, Grid, Image, Card, Button, Menu } from 'semantic-ui-react'
const Home = (props) => {


  return (
    <div className="component--home">

  <Item.Group divided>
      <BannerSegment
        background={storyBanner}
        header="First Meeting"
        text="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        "
      />
      <BannerSegment
        background={storyBanner}
        header="First Meeting"
        text="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        "
      />
      <BannerSegment
        background={storyBanner}
        header="First Meeting"
        text="
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        "
      />
      </Item.Group>

      {/*<Card.Group centered>
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
    </Card.Group>*/}



    </div>
  )
}


export default Home
