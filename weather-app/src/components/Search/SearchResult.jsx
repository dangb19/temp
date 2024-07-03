import useSearchCity from "../../hooks/useSearchCity";
import useLocation from "../../hooks/useLocation";

/* eslint-disable react/prop-types */
export default function SearchResult({ city }) {
  const { changeCity, searchTermOnClick } = useSearchCity();
  const { setLocation } = useLocation();

  return (
    <li
      // onClick={onClick} // Không nhận sự kiện click vì element bị xóa khỏi Dom bởi sự kiện blur trước khi click diễn ra
      onMouseDown={() => {
        setLocation({ lat: city.coords.lat, long: city.coords.long });
        changeCity(city.id);
        searchTermOnClick(city.id);
      }}
      className="h-16 md:h-12 px-4 flex items-center text-xl md:text-base dark:hover:bg-[#333333] hover:bg-blue-100 cursor-pointer"
    >
      {city.name}
    </li>
  );
}
