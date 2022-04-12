import { useState } from 'react';

const useTractLocation = ({ setLocation }) => {
  const [locationErrorMsg, setlocationErrorMsg] = useState('');
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLocation(`${latitude},${longitude}`);
    setlocationErrorMsg('');
    setIsFindingLocation(false);
  };

  const error = () => {
    setIsFindingLocation(false);
    setlocationErrorMsg('Unable to retrieve your location');
  };

  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    if (!navigator.geolocation) {
      setlocationErrorMsg('Geolocation is not supported by your browser');
      setIsFindingLocation(false);
    } else {
      // setLoading('Locating…')
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return { handleTrackLocation, locationErrorMsg, isFindingLocation };
};

export default useTractLocation;
