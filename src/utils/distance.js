import { getDistance } from 'geolib';

export const getCurrentDistance = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        const targetCoords = {
          latitude: -1.9705786,
          longitude: 30.1044288,
        };

        const distance = getDistance(userCoords, targetCoords);
        const averageSpeedMetersPerSecond = 16.67;

        const estimatedTimeSeconds = distance / averageSpeedMetersPerSecond;

        resolve(Number(estimatedTimeSeconds));
      },
      (error) => {
        reject('Position could not be determined.' + error);
      }
    );
  });
};

export function getGeolocationInfo(location, callback) {
  const apiKey = 'AIzaSyC63nofXo7TrdUawWh8VManHU2yowVc_Mc';
  const latlng = `${location.lat},${location.lng}`;
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'OK' && data.results.length > 0) {
        const result = data.results[0];
        const formattedAddress = result.formatted_address;
        callback(null, formattedAddress);
      } else {
        callback('No results found', null);
      }
    })
    .catch((error) => {
      callback(error, null);
    });
}

