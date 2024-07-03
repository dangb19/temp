import HourlyItem from "./HourlyItem";
import useWeather from "../../hooks/useWeather";

export default function HourlyList() {
  const { hourlyWeathers } = useWeather();
  const hourlyWeathers8 = hourlyWeathers.timelines.hourly.slice(0, 8);

  return (
    <ul className="grid sm:grid-cols-8 grid-cols-4 sm:gap-[0.3rem] gap-2 md:gap-3">
      {hourlyWeathers8.map((weather) => (
        <HourlyItem
          key={weather.time}
          time={weather.time}
          temperature={weather.values.temperature}
          weatherCode={weather.values.weatherCode}
        />
      ))}
    </ul>
  );
}
