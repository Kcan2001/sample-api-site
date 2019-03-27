import React from "react"
import './global.css';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const Map = withScriptjs(withGoogleMap((props) => {

    const {office} = props;
    
    return (
        <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: office.latitude, lng: office.longitude }}
>
        {props.isMarkerShown && <Marker position={{ lat: office.latitude, lng: office.longitude }} />}
        </GoogleMap>
    );
}));

export default Map;