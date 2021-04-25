import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const Map = ({data}) => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  }
  const defaultCenter = {
    lat: parseFloat(data.lat),
    lng: parseFloat(data.lng)
  } 
  return (
    <LoadScript googleMapsApiKey='AIzaSyBBXNLc81kppB_WOPhXdW4B7WysjOk3spk'>
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
