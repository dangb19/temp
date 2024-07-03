import { weatherCodeMapping } from "../../utils/mapping";

export default function WeatherIcon({ weatherCode }) {
  // weather code day/night OR weather code day (if dont have icon for night)
  const iconFileName =
    weatherCodeMapping[weatherCode] || weatherCodeMapping[weatherCode - 1];

  if (!iconFileName) return null;

  const iconPath = `./icons/${iconFileName}`;

  return <img className="w-full h-full" src={iconPath} alt="weather icon" />;
}
