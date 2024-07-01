import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import { MapContainer } from './styles';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.1657,
    longitude: 10.4515,
    zoom: 5,
    width: '100%',
    height: '100%',
  });

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  return (
    <MapContainer> 
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mihaels/clxojopx900ld01qr3m2y1ywc"
      />
    </MapContainer>
  );
};

export default Map;
