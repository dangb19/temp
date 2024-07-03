/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode() {},
});

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  // User change theme
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    }
    if (!darkMode) {
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  // Changing theme on firt load
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      // set darkmode by default
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
