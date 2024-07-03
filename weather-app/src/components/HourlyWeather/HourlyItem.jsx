import IconWeather from "../UI/WeatherIcon";
import {
  formatDateIntl,
  formatNumber,
  getWeatherCodeDayNight,
  toFahrenheit,
} from "../../utils/utils";
import useWeather from "../../hooks/useWeather";

/* eslint-disable react/prop-types */
export default function HourlyItem({ time, unit, weatherCode, temperature }) {
  const { isFahrenheit } = useWeather();
  const temp = isFahrenheit ? toFahrenheit(temperature) : temperature;
  const weatherCodeDayNight = getWeatherCodeDayNight(weatherCode, time);

  return (
    <li className="dark:bg-[#143f8c] bg-blue-100 flex flex-col gap-1 justify-between items-center p-4 sm:px-3 text-center rounded-xl">
      <p className="dark:text-[#cbcbcb] text-base sm:text-xs md:text-sm pb-4 sm:font-semibold md:font-normal">
        {formatDateIntl(time, "hour")} {unit}
      </p>
      <div className="p-2 sm:p-0 md:p-2">
        <IconWeather weatherCode={weatherCodeDayNight} />
      </div>
      <p className="text-xl font-bold md:font-normal">
        {formatNumber(temp)}&deg;
      </p>
    </li>
  );
}
