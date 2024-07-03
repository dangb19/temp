import IconWeather from "./UI/WeatherIcon";
import useWeather from "../hooks/useWeather";

export default function Error() {
  const { setFakeWeatherData, http, location } = useWeather();

  const currentHour = new Date().getHours();
  let iconCode = 10001; // night: moon icon
  let animationClass = "animate-bounce";

  if (currentHour >= 6 && currentHour < 18) {
    iconCode = 10000; // day: sun icon
    animationClass = "animate-spin-slow";
  }

  return (
    <div className="dark:bg-[#093480] bg-sky-50 fixed z-50 top-0 right-0 bottom-0 left-0 grow flex flex-col gap-2 justify-center items-center">
      <div className={`w-36 h-36 ${animationClass}`}>
        <IconWeather weatherCode={iconCode} />
      </div>
      <div className="text-center">
        <h1 className="text-3xl dark:text-gray-200 text-gray-800 mb-2">
          {http.error || location.error || "Not Found"}
        </h1>
        <p className="text-xl dark:text-gray-300 text-gray-600">
          {"Something went wrong!"}
        </p>
        <button
          className="py-[0.7rem] px-[1.4rem] mt-4 sm:text-lg text-xl bg-blue-300 dark:text-gray-800 rounded-md"
          onClick={setFakeWeatherData}
        >
          Use fake data
        </button>
      </div>
    </div>
  );
}
