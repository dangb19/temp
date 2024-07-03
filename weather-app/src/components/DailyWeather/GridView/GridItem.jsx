import {
  formatDateIntl,
  formatNumber,
  getWeatherCodeDayNight,
  toFahrenheit,
} from "../../../utils/utils";
import InfoButton from "./InfoButton";
import IconWeather from "../../UI/WeatherIcon";
import useWeather from "../../../hooks/useWeather";

/* eslint-disable react/prop-types */
export default function GridItem({ dailyWeather }) {
  const { isFahrenheit } = useWeather();
  const weatherCodeDayNight = getWeatherCodeDayNight(
    dailyWeather.values.weatherCodeMax,
    dailyWeather.time
  );
  const weather = {
    dayweek: formatDateIntl(dailyWeather.time, "dayweek"),
    daymonth: formatDateIntl(dailyWeather.time, "day-month"),
    temperatureMin: isFahrenheit
      ? formatNumber(toFahrenheit(dailyWeather.values.temperatureMin))
      : formatNumber(dailyWeather.values.temperatureMin),
    temperatureMax: isFahrenheit
      ? formatNumber(toFahrenheit(dailyWeather.values.temperatureMax))
      : formatNumber(dailyWeather.values.temperatureMax),
  };

  return (
    <li className="dark:bg-[#143f8c] bg-blue-100 dark:text-[#cbcbcb] flex items-center gap-2 p-3 rounded-lg">
      {/* ICON */}
      <div className="w-10 sm:w-20 md:p-1 sm:m-0">
        <IconWeather weatherCode={weatherCodeDayNight} />
      </div>

      {/* DESCRIPTION */}
      <div className="grow shrink flex flex-col justify-between">
        {/* - TOP */}
        <div className="mb-3 flex justify-between">
          <div>
            <p className="font-bold text-xl sm:text-lg">{weather.dayweek}</p>
            <p className="sm:text-[0.8rem] text-base sm:-mt-1">
              {weather.daymonth}
            </p>
          </div>
          <InfoButton dailyWeather={dailyWeather} />
        </div>

        {/* - BOTTOM */}
        <div className="flex">
          <p className="grow">
            <span className="block text-3xl font-bold">
              {weather.temperatureMin}&deg;
            </span>
            <span className="sm:text-[0.75rem] text-md block -translate-y-[0.25rem]">
              min
            </span>
          </p>

          <p className="grow">
            <span className="block text-3xl font-bold">
              {weather.temperatureMax}&deg;
            </span>
            <span className="sm:text-[0.75rem] text-md block -translate-y-[0.25rem]">
              max
            </span>
          </p>
        </div>
      </div>
    </li>
  );
}
