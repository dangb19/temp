/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { formatNumber } from "../../../utils/utils";
import { units } from "../../../utils/mapping";

export function TooltipDetailsItem({ icon, label, value }) {
  return (
    <div className="flex items-center text-base sm:text-lg md:text-base">
      <div className="w-8 md:w-7">{icon}</div>
      <span className="grow dark:text-gray-100 font-semibold">{label}</span>
      <span className="grow text-right dark:text-gray-300 text-gray-500">
        {value}
      </span>
    </div>
  );
}

const TooltipDetails = forwardRef(({ dailyWeather }, ref) => {
  return (
    <div
      className="dark:bg-[#021e3e] bg-white shadow-[0_2px_12px_4px_rgba(0,0,0,0.1)] absolute right-0 z-50 translate-y-2 flex flex-col sm:gap-6 gap-7 p-3 w-[11.5rem] sm:w-60 md:w-52 rounded-md"
      ref={ref}
    >
      <TooltipDetailsItem
        icon={
          <i className="fa-solid fa-wind text-[#6abae9] text-lg md:text-base"></i>
        }
        label="Wind"
        value={formatNumber(
          dailyWeather.values.windSpeedAvg,
          units["kilometer-per-hour"]
        )}
      />
      <TooltipDetailsItem
        icon={
          <i className="fa-solid fa-cloud-rain text-[#6abae9] text-lg md:text-base"></i>
        }
        label="Rain chance"
        value={formatNumber(
          dailyWeather.values.precipitationProbabilityAvg,
          units.percent
        )}
      />
      <TooltipDetailsItem
        icon={
          <i className="fa-solid fa-water text-[#6abae9]  text-lg md:text-base"></i>
        }
        label="Humidity"
        value={formatNumber(dailyWeather.values.humidityAvg, units.percent)}
      />
      <TooltipDetailsItem
        icon={
          <i className="fa-solid fa-arrow-trend-up text-[#6abae9]  text-lg md:text-base"></i>
        }
        label="Pressure"
        value={formatNumber(dailyWeather.values.pressureSurfaceLevelAvg)}
      />
    </div>
  );
});

export default TooltipDetails;
