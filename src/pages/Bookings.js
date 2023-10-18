import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const locations = [
    { name: 'Location 1', position: { lat: -1.950, lng: 30.105 } },
    { name: 'Location 2', position: { lat: -1.9507, lng: 30.0663 } },
    { name: 'Location 3', position: { lat: -1.937, lng: 30.076 } }
  ];
const Bookings = () => {
    const containerStyle = {
        width: '800px',
        height: '600px'
      };
    
      const center = {
        lat: -1.947,
        lng: 30.100
      };
    
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyC63nofXo7TrdUawWh8VManHU2yowVc_Mc'
      });
    
      return (
        <div>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={location.position}
                  name={location.name}
                />
              ))}
            </GoogleMap>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
};

export default Bookings;
