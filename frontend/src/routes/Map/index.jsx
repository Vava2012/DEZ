import React from 'react';
import MapComponent from '../../components/MapBox/Map/Map';
import { MapPageContainer } from './styles.jsx'; 

const Map = () => {
  return (
    <MapPageContainer> 
      <MapComponent />
    </MapPageContainer>
  );
};

export default Map;
