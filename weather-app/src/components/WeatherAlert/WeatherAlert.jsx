/* eslint-disable react/prop-types */
export default function WeatherAlert({ title, message }) {
  return (
    <div className="dark:bg-[#fbbf24] bg-blue-100 dark:text-black text-gray-800 flex items-center gap-4 p-3 sm:p-4 rounded-lg">
      <i className="fa-solid fa-triangle-exclamation sm:text-2xl text-3xl dark:text-black text-[#fbbf24]"></i>
      <div>
        <h3 className="dark:font-bold text-lg md:text-base">{title}</h3>
        <p className="dark:text-gray-900 text-gray-600 text-base md:text-base">
          {message}
        </p>
      </div>
    </div>
  );
}
