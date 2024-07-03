import useSearchCity from "../../hooks/useSearchCity";
import SearchResult from "./SearchResult";

export default function SearchResults() {
  const { searchResults } = useSearchCity();
  return (
    <div className="group-has-[:focus]:block hidden absolute z-50 translate-y-2 w-full max-h-64 md:max-h-48 overflow-y-scroll duration-150 dark:bg-[#021e3e] bg-white shadow-[0_2px_12px_4px_rgba(0,0,0,0.1)] ">
      <ul>
        {searchResults.map((city) => (
          <SearchResult key={city.name} city={city} />
        ))}
      </ul>
    </div>
  );
}
