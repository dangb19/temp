import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";
import useSearchCity from "../hooks/useSearchCity";
import SearchInput from "./Search/SearchInput";
import SettingButton from "./Setting/SettingButton";

export default function MainNavigation() {
  const { isUsingFakeData } = useWeather();
  const { setRefresh } = useLocation();
  const { searchTermOnChange } = useSearchCity();

  return (
    <>
      <div className="md:h-12 h-10">
        <span className="flex justify-center items-center h-full text-base sm:text-sm text-gray-300 dark:text-gray-400">
          <span className="block relative">
            <span className="absolute top-1/2 -left-4 -translate-y-1/2 flex h-[0.6rem] w-[0.6rem]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            {isUsingFakeData && <span>Using fake data &gt;&gt;&gt; </span>}
            <span
              onClick={() => {
                setRefresh((prevState) => !prevState);
                searchTermOnChange("");
              }}
              className={`text-sky-500 cursor-pointer py-2 pr-2 `}
            >
              Refresh
            </span>
          </span>
        </span>
      </div>
      <div className="flex mx-2 sm:mx-1 items-center gap-4 mb-6 md:mb-8">
        <SearchInput />
        <SettingButton />
      </div>{" "}
    </>
  );
}
