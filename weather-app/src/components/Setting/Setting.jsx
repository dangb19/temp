/* eslint-disable react/display-name */
import { forwardRef } from "react";
import SettingItem from "./SettingItem";
import useDarkMode from "../../hooks/useDarkMode";
import useWeather from "../../hooks/useWeather";

const Setting = forwardRef((_, ref) => {
  const { isFahrenheit, toggleTemperature } = useWeather();
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className="dark:bg-[#021e3e] bg-white shadow-[0_2px_12px_4px_rgba(0,0,0,0.1)] absolute right-0 z-50 translate-y-2 flex flex-col w-[13rem] sm:w-[14rem] md:w[17rem] rounded-md overflow-hidden cursor-pointer"
      ref={ref}
    >
      <SettingItem
        onClick={toggleDarkMode}
        label={darkMode ? "Light" : "Dark"}
        shortcut="Alt + K"
        icon={<i className={`fa-solid fa-${darkMode ? "sun" : "moon"}`}></i>}
      />
      <SettingItem
        onClick={toggleTemperature}
        label={isFahrenheit ? "Celsius" : "Fahrenheit"}
        shortcut="Alt + U"
        icon={<i className="fa-solid fa-temperature-three-quarters"></i>}
      />
    </div>
  );
});

export default Setting;
