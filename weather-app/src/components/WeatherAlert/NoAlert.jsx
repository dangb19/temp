export default function NoAlert() {
  return (
    <div className="dark:bg-[#143f8c] bg-blue-100 dark:text-gray-300 text-gray-800 flex items-center gap-4 p-3 sm:p-4 rounded-lg">
      <i className="fa-solid fa-face-smile-wink sm:text-2xl text-3xl text-[#fbbf24]"></i>
      <div>
        <h3 className="dark:font-bold text-lg md:text-base">
          No warning issused
        </h3>
        <p className="dark:text-gray-300 text-gray-600 text-base md:text-base">
          Enjoy your day!
        </p>
      </div>
    </div>
  );
}
