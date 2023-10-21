import React from 'react';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import iconImage from '../assets/images/icon.svg';

const locations = [
  { name: ' KAMANZI Guillet', position: { lat: -1.9705786, lng: 30.1044288 } },
];
const Map = ({ onLocationChange }) => {
  const containerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '5px',
  };

  const center = {
    lat: -1.947,
    lng: 30.1,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC63nofXo7TrdUawWh8VManHU2yowVc_Mc',
  });
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };
  return (
    <div>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onClick={(e) => {
          const location = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          };
          onLocationChange(location);
        }}>
          {locations.map((location, index) => (
            <MarkerF
              icon={<img alt="logo" src={iconImage} />}
              key={index}
              position={location.position}
              name={location.name}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
          {selectedLocation && (
            <InfoWindowF
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-3">
                <h3>{selectedLocation.name}</h3>
                <p>Contact: 0780403244</p>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;
