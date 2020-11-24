import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './App.css';





function Map(){
  return(
    <GoogleMap defaultZoom={10} defaultCenter={{latt: 39.739235, lng: -104.990250}} />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {
  return (
    <div className="App">
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtRuoP4SE5Bpa66gzSihxod2H3-GKh4IM`}
        loadingElement={<div style={{height: "100%"}}/>}
        containerElement={<div style={{height: "100%"}}/>}
        mapElement={<div style={{height: "100%"}}/>}
      />
    </div>
  );
}


