import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '300px'
};



export class MapContainer extends Component {


  render() {
    const onMarkerClick = (evt) => {
       window.open("https://goo.gl/maps/1Y3pGjkpuWDbmiPX9", "_blank");
   };
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -33.979277,
         lng: 18.482093
       }}>
       <Marker onClick={onMarkerClick}/>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCySoGfQoIBmK2vd_N6EiMCI03Dooqad60'
})(MapContainer);
