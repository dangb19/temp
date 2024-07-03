export default function MinMaxTemperature({ type = "min", temperature }) {
  return (
    <div
      className={`flex gap-2 md:gap-3 ${
        type === "min" ? "justify-end" : "justify-start"
      }  sm:justify-normal items-center`}
    >
      <div className="flex justify-center items-center rounded-full p-4 w-12 sm:w-8 md:w-12 h-12 sm:h-8 md:h-12 dark:bg-[#18448f] bg-gray-100">
        <i
          className={`fa-solid fa-arrow-${
            type === "min" ? "down" : "up"
          } text-xl sm:text-lg md:text-[1.35rem] dark:text-[#cbcbcb] text-gray-600`}
        ></i>
      </div>
      <p className="md:flex md:flex-col md:gap-3">
        <span className="dark:text-[#9ca1ab] text-xl sm:text-lg md:text-base text-gray-600 block">
          {type === "min" ? "Min" : "Max"}
        </span>
        <span className="text-2xl sm:text-xl md:text-5xl font-bold block">
          {temperature}&deg;
        </span>
      </p>
    </div>
  );
}
