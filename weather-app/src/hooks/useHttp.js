import axios from "axios";
import { useEffect, useRef, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const api = axios.create({
  baseURL: "https://api.tomorrow.io",
});

const fetchData = async (endpoint) => {
  return new Promise((resolve, reject) => {
    (async function () {
      try {
        const response = await api.get(endpoint);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    })();
  });
};

const initialData = { current: null, daily: null, hourly: null };

export default function useHttp(lat, long) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const timeout = useRef();

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);

      const endpoints = [
        `/v4/weather/realtime?location=${lat},${long}&apikey=${API_KEY}`,
        `/v4/weather/forecast?location=${lat},${long}&timesteps=1d&apikey=${API_KEY}`,
        `/v4/weather/forecast?location=${lat},${long}&timesteps=1h&apikey=${API_KEY}`,
      ];

      try {
        if (lat === null || long === null) {
          throw new Error("Could not get location");
        }

        const dataArr = await Promise.all(
          endpoints.map(async (endpoint) => {
            const data = await fetchData(endpoint);
            return data;
          })
        );

        setIsLoading(false);
        setError(null);
        setData({ current: dataArr[0], daily: dataArr[1], hourly: dataArr[2] });
        clearTimeout(timeout.ref);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.type);
        } else {
          setError(error.message);
        }

        setIsLoading(false);
        clearTimeout(timeout.ref);
      }
    };

    fetchWeatherData();

    timeout.ref = setTimeout(() => {
      setIsLoading(false);
      setError("Timeout: Could not fetch data");
    }, 5000);

    return () => clearTimeout(timeout.ref);
  }, [lat, long]);

  return {
    data,
    setData,
    error,
    setError,
    isLoading,
    setIsLoading,
    timeout,
  };
}
