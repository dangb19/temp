/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import Button from "../../UI/Button";
import TooltipDetails from "./TooltipDetails";

export default function InfoButton({ dailyWeather }) {
  const tooltipRefShow = useRef();
  const [tooltipIsShow, setTooltipIsShow] = useState(false);

  const handleTooltipToggle = () => {
    setTooltipIsShow(!tooltipIsShow);
  };

  const handleClickOutside = (e) => {
    if (tooltipRefShow.current && !tooltipRefShow.current.contains(e.target)) {
      setTooltipIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Button onClick={handleTooltipToggle} sizeClass="w-10 h-10">
        <i className="fa-solid fa-circle-info text-xl dark:text-[#ababab] text-gray-500"></i>
      </Button>
      {tooltipIsShow && (
        <TooltipDetails ref={tooltipRefShow} dailyWeather={dailyWeather} />
      )}
    </div>
  );
}
