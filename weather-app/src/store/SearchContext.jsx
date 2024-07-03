/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { cities } from "../utils/mapping";

function findItemById(id) {
  return cities.find((city) => id === city.id);
}

export const SearchContext = createContext({
  city: "",
  changeCity() {},
  searchTerm: "",
  searchTermOnChange() {},
  searchTermOnClick() {},
  searchResults: [],
});

export const SearchContextProvider = ({ children }) => {
  const [currentCityId, setCurrentCityId] = useState(cities[0].id);
  const currentCity = findItemById(currentCityId);

  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = cities.filter((city) =>
    city.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  const searchTermOnClick = (id) => {
    const _city = findItemById(id);
    setSearchTerm(_city.name);
  };

  const searchContext = {
    city: currentCity,
    changeCity: setCurrentCityId,
    searchTerm,
    searchTermOnChange: setSearchTerm,
    searchTermOnClick,
    searchResults,
  };
  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};
