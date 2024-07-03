import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";

export default function useWeather() {
  return useContext(WeatherContext);
}
