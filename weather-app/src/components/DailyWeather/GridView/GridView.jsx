import GridItem from "./GridItem";
import useWeather from "../../../hooks/useWeather";

export default function GridView() {
  const { dailyWeathers } = useWeather();

  const dailyWeathers6 = dailyWeathers.timelines.daily.slice(0, 6);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
      {dailyWeathers6.map((weather) => (
        <GridItem key={weather.time} dailyWeather={weather} />
      ))}
    </ul>
  );
}
