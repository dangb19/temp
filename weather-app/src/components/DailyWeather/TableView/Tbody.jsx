import Tr from "./Tr";
import useWeather from "../../../hooks/useWeather";

export default function Tbody() {
  const { dailyWeathers } = useWeather();
  const dailyWeathers6 = dailyWeathers.timelines.daily.slice(0, 6);

  return (
    <tbody className="dark:text-gray-200">
      {dailyWeathers6.map((weather) => (
        <Tr key={weather.time} dailyWeather={weather} />
      ))}
    </tbody>
  );
}
