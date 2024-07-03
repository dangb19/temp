import WeatherIcon from "../UI/WeatherIcon.jsx";
import MinMaxTemperature from "./MinMaxTemperature";
import useWeather from "../../hooks/useWeather";

import {
  formatNumber,
  getWeatherCodeDayNight,
  toFahrenheit,
} from "../../utils/utils";
import { weatherStatusMapping } from "../../utils/mapping";

export default function CurrentWeather() {
  const { currentWeather, dailyWeathers, isFahrenheit } = useWeather();

  const weatherCodeDayNight = getWeatherCodeDayNight(
    currentWeather.data.values.weatherCode,
    currentWeather.data.time
  );

  let animation = "animate-fade-in-out"; // for other icon
  if (weatherCodeDayNight === 10000) {
    animation = "animate-spin-slow"; // for clear sun only
  }

  const weather = {
    code: weatherCodeDayNight,
    status: weatherStatusMapping[weatherCodeDayNight],
    temperature: isFahrenheit
      ? toFahrenheit(currentWeather.data.values.temperature)
      : currentWeather.data.values.temperature,
    temperatureApparent: isFahrenheit
      ? toFahrenheit(currentWeather.data.values.temperatureApparent)
      : currentWeather.data.values.temperatureApparent,
    min: isFahrenheit
      ? toFahrenheit(dailyWeathers.timelines.daily[0].values.temperatureMin)
      : dailyWeathers.timelines.daily[0].values.temperatureMin,
    max: isFahrenheit
      ? toFahrenheit(dailyWeathers.timelines.daily[0].values.temperatureMax)
      : dailyWeathers.timelines.daily[0].values.temperatureMax,
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-5 mb-8 sm:mb-6 md:ml-10">
      <div className="grid grid-cols-2 sm:grid-cols-7 justify-center items-center gap-10 sm:gap-0 md:gap-12 sm:mb-6">
        <div className="sm:col-span-3 flex items-center justify-end sm:justify-center">
          <div className={`${animation}`}>
            <WeatherIcon weatherCode={weather.code} />
          </div>
        </div>

        <div className="sm:col-span-4 flex flex-col justify-start">
          <p className="text-7xl sm:text-8xl md:text-[7.25rem] font-bold mb-2">
            {formatNumber(weather.temperature)}&deg;
          </p>
          <p className="text-2xl sm:text-[1.3rem] dark:text-[#cbcbcb] text-gray-600">
            {weather.status}
          </p>
        </div>
      </div>

      <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-10 sm:gap-0 md:gap-x-5 md:max-[940px]:gap-x-10 md:px-4">
        <MinMaxTemperature type="min" temperature={formatNumber(weather.min)} />
        <MinMaxTemperature type="max" temperature={formatNumber(weather.max)} />
        <p className="text-[#e67052] text-xl sm:text-lg md:text-xl text-center sm:text-left sm:mt-0 col-span-2 sm:col-span-1 md:col-span-2 md:justify-self-end">
          Feels like {formatNumber(weather.temperatureApparent)}&deg;
        </p>
      </div>
    </div>
  );
}
