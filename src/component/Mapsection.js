import React, { useState } from 'react'
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { GoLocation } from 'react-icons/go';
import { SiWebpack } from 'react-icons/si';
import { BsTelephoneOutboundFill } from 'react-icons/bs';

const MapGrid = styled.section`
margin-top:2rem;
color:black;
    padding:2rem;
  height:70vh;
  width:100%;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  @media screen and (max-width:450px){
    grid-template-columns: 1fr;
    height:100vh;
  }

`;

// const MapGrid = styled.section``;

const TextAddress = styled.section`
    width:100%;
   height:100%;
  padding:3rem;
  @media screen and (max-width:450px){
    padding:1rem;
    margin-top:1rem;  
}

`;
const MapContainer = styled.div`
   width:100%;
   height:100%;
  padding:2rem;
`;
const Data = styled.div`
  height:20%;
  width:70%;
  margin:1rem 0;
  display:flex;
  flex-direction:row;
  justify-content:space-between;

  @media screen and (max-width:450px){
    width:100%;
    height:20%;
    margin-top:10%;
    margin:1rem 2rem;  
}
`;
const IconData = styled.div`
   width:90%;
   @media screen and (max-width:450px){
    width:100%;
    font-size:10px;
    margin-left:1rem;
}
`;

const Mapsection = ({ col2head, location, address, phone }) => {



    const [coords] = useState({ lat: 18.6463, lng: 73.7591 });
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: coords.lat, lng: coords.lng },
            map,
            title: `DR. D. Y. PATIL INSTITUTE OF ENGINEERING, MANAGEMENT & RESEARCH AKURDI`
        });
        return marker;
    };
    return (
        <MapGrid>
            <MapContainer>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCyvUN2bQgomjC8MJM9camQ9XK0gnsxrJ8' }}
                    defaultZoom={15}
                    defaultCenter={{
                        lat: coords.lat,
                        lng: coords.lng,
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMapReact>

            </MapContainer>

            <TextAddress >
                <h1 style={{ margin: "1rem 0" }}>{col2head}</h1>
                <Data>
                    <GoLocation style={{ fontSize: "30px" }} />
                    <IconData>{location}</IconData>
                </Data>
                <Data>
                    <BsTelephoneOutboundFill style={{ fontSize: "30px" }} />
                    <IconData>{phone}</IconData>
                </Data>
                <Data>
                    <SiWebpack style={{ fontSize: "30px" }} />
                    <IconData>{address}</IconData>
                </Data>
            </TextAddress>
        </MapGrid>
    )
}

export default Mapsection;


