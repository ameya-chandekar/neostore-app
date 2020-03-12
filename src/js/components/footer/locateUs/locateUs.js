
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

import React, { Component } from 'react'
import Navbar from '../../navbar/navbar';
import Footer from '../footer'
const mapStyles = {
    width: '70%',
    height: '80%',
};
export class LocateUs extends Component {

    render() {
        return (
            <div>
                <div><Navbar /></div>
                <div style={{ height: "500px", width: "100%" ,margin:"5% 15%" } } > 
                <Map
                
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 18.5790121, lng: 73.7399336 }}
                >
                    <Marker position={{ lat: 18.5790121, lng: 73.7399336}} />
 
                    </Map>
                </div>

               <div> <Footer/></div>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCldqThJjAdICVbx8byIdqOHQzE2D0K2Mw'
})(LocateUs);
