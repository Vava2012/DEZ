import React, { useState } from 'react';
import { MapContainer } from './styles';
import ReactMapGl, { GeolocateControl, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 51.2351,
    longitude: 10.0399,
    zoom: 5.5,
    width: '100%',
    height: '100%',
  });

  const [mapLoaded, setMapLoaded] = useState(false);

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

  return (
    <MapContainer> 
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mihaels/clxojopx900ld01qr3m2y1ywc"
        onLoad={() => setMapLoaded(true)}
      >
        {mapLoaded && (
          <>
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={false}
              auto
            />
            <div className="viewPortnfo">
              <div>
                <strong>Zoom:</strong> <span>{viewport.zoom}</span>
              </div>
            </div>
            <div style={{ position: 'absolute', left: '50%', top: '70%' }}>
              <NavigationControl />
            </div>
          </>
        )}
      </ReactMapGl>
    </MapContainer>
  );
};

export default Map;
