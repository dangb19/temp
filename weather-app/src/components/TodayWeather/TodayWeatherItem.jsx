/* eslint-disable react/prop-types */
export default function TodayWeatherItem({ icon, title, value, unit }) {
  return (
    <li className="flex justify-between items-center gap-4">
      <div className="flex justify-center items-center w-6 md:w-8">{icon}</div>
      <div className="grow sm:block flex justify-between items-center">
        <h3 className="dark:text-gray-300 text-gray-500 sm:text-base text-xl md:text-[0.95rem] font-semibold sm:font-normal">
          {title}
        </h3>
        <p className="font-bold text-xl sm:text-base md:text-[1.35rem] dark:text-gray-100">
          {value} {unit}
        </p>
      </div>
    </li>
  );
}
