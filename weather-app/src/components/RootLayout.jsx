import MainNavigation from "./MainNavigation";
import CurrentWeather from "./CurrentWeather/CurrentWeather";

import TodayWeatherSection from "./TodayWeather/TodayWeatherSection";
import HourlyWeatherSection from "./HourlyWeather/HourlyWeatherSection";
import DailyWeatherSection from "./DailyWeather/DailyWeatherSection";
import WeatherAlertSection from "./WeatherAlert/WeatherAlertSection";

import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
import useWeather from "../hooks/useWeather";
import { SearchContextProvider } from "../store/SearchContext";

export default function RootLayout() {
  const { location, http } = useWeather();

  let content = (
    <>
      <header>
        <CurrentWeather />
        <TodayWeatherSection />
      </header>
      <main>
        <HourlyWeatherSection />
        <DailyWeatherSection />
        <WeatherAlertSection />
      </main>
      <Footer />
    </>
  );

  if (location.error || http.error) {
    content = <Error />;
  }
  if (location.isLoading || http.isLoading) {
    content = <Loader />;
  }

  return (
    <SearchContextProvider>
      <div className="font-sans font-medium h-screen">
        <div className="container max-w-5xl flex flex-col">
          <MainNavigation />
          {content}
        </div>
      </div>
    </SearchContextProvider>
  );
}
