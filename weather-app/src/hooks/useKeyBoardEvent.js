import { useEffect } from "react";
import useWeather from "./useWeather";
import useDarkMode from "./useDarkMode";

export default function useKeyBoardEvent() {
  const { toggleTemperature } = useWeather();
  const { toggleDarkMode } = useDarkMode();

  // Handling keyboard event
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey) {
        if (event.key === "u") {
          toggleTemperature();
        }
        if (event.key === "k") {
          toggleDarkMode();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleTemperature, toggleDarkMode]);
}
