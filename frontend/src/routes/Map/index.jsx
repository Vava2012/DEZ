import React from 'react';
import MapComponent from '../../components/MapBox/Map/Map';
import { MapContainer } from './styles.jsx'; 

const Map = () => {
  return (
    <MapContainer> 
      <MapComponent />
    </MapContainer>
  );
};

export default Map;
