import React, {createRef, useEffect} from "react";
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import {MapContainer, TileLayer, Marker, Polyline, FeatureGroup} from "react-leaflet";

import L from 'leaflet';
import "leaflet-routing-machine";
import {useSelector, useStore} from "react-redux";
import {getFirstMarker, getSecondMarker, getSteps} from "../reducers/stepsArray";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const defaultCentralPosition = [29.84660399, 30.29496392];

export function Map(){

    const currentValueSteps = useSelector(getSteps)

    const startMarkerCoordinates = useSelector(getFirstMarker)

    const endMarkerCoordinates = useSelector(getSecondMarker)

    const groupRef = createRef();

    const mapRef = createRef();

    useEffect(() => {
        if(startMarkerCoordinates !== undefined && mapRef.current !== null) {
            mapRef.current.fitBounds(groupRef.current.getBounds());
        }
    })

    return(
        <MapContainer center={defaultCentralPosition} zoom={13} scrollWheelZoom={true} ref={mapRef}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FeatureGroup ref={groupRef}>
                {startMarkerCoordinates && <Marker position={startMarkerCoordinates}></Marker>}
                {endMarkerCoordinates && <Marker position={endMarkerCoordinates}></Marker>}
                {currentValueSteps && <Polyline pathOptions={{ color: 'red' }} positions={currentValueSteps} />}
            </FeatureGroup>
        </MapContainer>
    );
}
