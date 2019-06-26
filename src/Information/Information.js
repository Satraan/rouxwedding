import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './EmbedMap.js';
import { Item, Icon, Segment, List, Image, Card, Button, Menu } from 'semantic-ui-react'
const Information = (props) => {
  var key = "AIzaSyAauN50IidgrQHHiRfbsTSdaK41mF8Pywg";



  return (
    <div className="component--information">
      <Segment vertical>
        <Item.Group divided>
          <Item className="item--info">
            <Item.Content>
            <MapContainer/>
            </Item.Content>
            <Item.Content>
                    <Item.Header as='a'>Ceremony</Item.Header>
                    <Item.Description>
                      <List>
                        <List.Item>

                          <List.Content> <List.Icon name='calendar outline' /> 12th October 2019</List.Content>
                        </List.Item>
                        <List.Item>

                          <List.Content><List.Icon name='clock outline' />14:00 - 16:30</List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
<List.Icon name='pied piper hat' />
                              Formal
                          </List.Content>
                        </List.Item>
                        <List.Item>

                          <List.Content>
                          <List.Icon name='mail outline' />
                          RSVP to <a href='wedding@rouxtaccess.com'>wedding@rouxtaccess.com</a>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Item.Description>
                  </Item.Content>
          </Item>
          </Item.Group>
       </Segment>


    </div>
  )
}


export default Information
