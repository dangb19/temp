/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { fakeWeatherData } from "../utils/fakeWeatherData";
import { getWeatherAlert } from "../utils/utils";

import { createContext, useEffect, useState, useCallback } from "react";
import useHttp from "../hooks/useHttp";
import useLocation from "../hooks/useLocation";

const TEMPERATURE_UNITS = "temperatureUnit";
const CELSIUS = "celsius";
const FAHRENHEIT = "fahrenheit";

const WeatherContext = createContext({
  currentWeather: {},
  dailyWeathers: {},
  hourlyWeathers: {},
  isFahrenheit: false,
  setIsFahrenheit() {},
  toggleTemperature() {},
  alert: {},
  setFakeWeatherData() {},
  isUsingFakeData: false,
  http: {
    isLoading: false,
    error: null,
  },
  location: {
    isLoading: false,
    error: null,
  },
});

const WeatherContextProvider = ({ children }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isUsingFakeData, setIsUsingFakeData] = useState(false);
  const [weather, setWeather] = useState();

  const {
    location,
    setLocationLoading,
    locationLoading,
    locationError,
    setLocationError,
  } = useLocation();

  const {
    data,
    setIsLoading: setHttpIsLoading,
    isLoading: httpLoading,
    error: httpError,
    setError: setHttpError,
    timeout,
  } = useHttp(location.lat, location.long);

  const setFakeWeatherData = () => {
    setWeather(fakeWeatherData);
    setIsUsingFakeData(true);
    setLocationLoading(false);
    setHttpIsLoading(false);
    setHttpError(null);
    setLocationError(null);
    clearTimeout(timeout.ref);
  };

  useEffect(() => {
    if (data.current && data.daily && data.hourly) {
      setWeather(data);
      setIsUsingFakeData(false);
    } else {
      setWeather(fakeWeatherData);
    }
  }, [data.current, data.daily, data.hourly]);

  // WORKING WITH LOCAL STORAGE
  const toggleTemperature = useCallback(() => {
    if (isFahrenheit) {
      setIsFahrenheit(false);
      localStorage.setItem(TEMPERATURE_UNITS, CELSIUS);
    } else if (!isFahrenheit) {
      setIsFahrenheit(true);
      localStorage.setItem(TEMPERATURE_UNITS, FAHRENHEIT);
    }
  }, [isFahrenheit, setIsFahrenheit]);

  // Get setting data from local storage on first load
  useEffect(() => {
    if (localStorage.getItem(TEMPERATURE_UNITS) === CELSIUS) {
      setIsFahrenheit(false);
    } else if (localStorage.getItem(TEMPERATURE_UNITS) === FAHRENHEIT) {
      setIsFahrenheit(true);
    } else {
      // set temperature unit = celsius by default
      localStorage.setItem(TEMPERATURE_UNITS, CELSIUS);
      setIsFahrenheit(false);
    }
  }, [setIsFahrenheit]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather: weather?.current || fakeWeatherData.current,
        dailyWeathers: weather?.daily || fakeWeatherData.daily,
        hourlyWeathers: weather?.hourly || fakeWeatherData.hourly,
        isFahrenheit,
        setIsFahrenheit,
        toggleTemperature,
        alert: getWeatherAlert(weather?.current.data.values.weatherCode),
        setFakeWeatherData,
        isUsingFakeData,
        http: {
          isLoading: httpLoading,
          error: httpError,
        },
        location: {
          isLoading: locationLoading,
          error: locationError,
        },
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
