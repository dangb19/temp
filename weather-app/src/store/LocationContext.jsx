/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const initialLocation = {
  lat: null,
  long: null,
};

export const LocationContext = createContext({
  location: initialLocation,
  setLocation() {},
  locationLoading: false,
  setLocationLoading() {},
  locationError: null,
  setLocationError() {},
  setRefresh() {},
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(initialLocation);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      setLocationLoading(true);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });

            setLocationLoading(false);
          },
          (error) => {
            setLocationError(error.message);
            setLocationLoading(false);
          }
        );
      } else {
        setLocationError("Geolocation is not supported by your browser");

        setLocationLoading(false);
      }
    };
    getLocation();
  }, [refresh]);

  const locationCtx = {
    location,
    setLocation,
    locationLoading,
    setLocationLoading,
    locationError,
    setLocationError,
    setRefresh,
  };

  return (
    <LocationContext.Provider value={locationCtx}>
      {children}
    </LocationContext.Provider>
  );
};
