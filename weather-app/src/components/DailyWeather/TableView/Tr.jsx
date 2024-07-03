/* eslint-disable react/prop-types */
import {
  formatDateIntl,
  formatNumber,
  getWeatherCodeDayNight,
  toFahrenheit,
} from "../../../utils/utils";
import { units } from "../../../utils/mapping";
import IconWeather from "../../UI/WeatherIcon";
import useWeather from "../../../hooks/useWeather";

export default function Tr({ dailyWeather }) {
  const { isFahrenheit } = useWeather();

  const weather = {
    weatherCodeDayNight: getWeatherCodeDayNight(
      dailyWeather.values.weatherCodeMax,
      dailyWeather.time
    ),
    dayweek: formatDateIntl(dailyWeather.time, "dayweek"),
    humidity: formatNumber(dailyWeather.values.humidityAvg, units.percent),
    pressure: formatNumber(dailyWeather.values.pressureSurfaceLevelAvg),
    rainChance: formatNumber(
      dailyWeather.values.precipitationProbabilityAvg,
      units.percent
    ),
    minTemperature: isFahrenheit
      ? formatNumber(toFahrenheit(dailyWeather.values.temperatureMax))
      : formatNumber(dailyWeather.values.temperatureMin),
    maxTemperature: isFahrenheit
      ? formatNumber(toFahrenheit(dailyWeather.values.temperatureMax))
      : formatNumber(dailyWeather.values.temperatureMax),
  };

  return (
    <tr className="dark:bg-[#103a87] dark:hover:bg-blue-600 hover:bg-blue-50 sm:text-[0.93rem] text-lg text-gray-700 dark:text-gray-200 border-b last:border-0 dark:border-blue-800 border-blue-200 transition-colors ease duration-75">
      <td className="p-4 md:py-2 text-left flex items-center">
        <span className="w-12 inline-block">
          <IconWeather weatherCode={weather.weatherCodeDayNight} />
        </span>
        <span className="inline-block sm:ml-3 ml-4">{weather.dayweek}</span>
      </td>
      <td className="p-4 md:py-2">{weather.rainChance}</td>
      <td className="p-4 md:py-2">{weather.humidity}</td>
      <td className="p-4 md:py-2">{weather.pressure} hPa</td>
      <td className="p-4 md:py-2">{weather.minTemperature}&deg;</td>
      <td className="p-4 md:py-2">{weather.maxTemperature}&deg;</td>
    </tr>
  );
}
