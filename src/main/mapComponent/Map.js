import React from "react";
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class Map extends React.Component{
    state = {
        position: [51.505, -0.09]
    }

    render(){
        return(
            <MapContainer center={this.state.position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <Marker position={this.state.position}>
                        <Popup>
                            Center point <br />
                        </Popup>
                    </Marker>
            </MapContainer>
        );
    }
}
