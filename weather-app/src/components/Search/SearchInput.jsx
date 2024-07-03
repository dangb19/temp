import { useRef } from "react";
import useSearchCity from "../../hooks/useSearchCity";
import SearchResults from "./SearchResults";

export default function SearchInput() {
  const { searchTerm, searchTermOnChange } = useSearchCity();

  const inputRef = useRef();

  const handleChange = (e) => {
    searchTermOnChange(e.target.value);
  };

  const handleClear = () => {
    clickToFocus();
    searchTermOnChange("");
  };

  const clickToFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="group grow relative">
      <div className="relative flex items-center text-gray-700 dark:text-gray-300 ">
        <i
          onClick={clickToFocus}
          className="absolute left-0 fa-solid fa-magnifying-glass text-2xl md:text-xl p-6"
        ></i>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Search for a location"
          className="grow text-xl sm:text-lg md:text-base p-4 sm:p-3 md:p-[0.7rem] pl-16 sm:pl-16 md:pl-16 focus:outline-none dark:bg-[#1c489c] bg-gray-200 dark:focus:bg-[#09274b] focus:bg-gray-100 focus:outline-red-500 focus:-outline-offset-2 rounded-full"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            onBlur={clickToFocus}
            className="absolute right-0 p-6"
          >
            <i className="fa-solid fa-circle-xmark text-xl md:text-base"></i>
          </button>
        )}
      </div>
      <SearchResults />
    </div>
  );
}
