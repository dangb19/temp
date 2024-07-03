export default function THead() {
  return (
    <thead>
      <tr className="dark:bg-[#18448f] bg-blue-100 border-b dark:border-blue-700 border-blue-300 text-xl sm:text-lg md:text-base">
        <th className="font-bold sm:font-normal md:font-semibold md:text-gray-600 dark:md:text-gray-200 p-4 text-left">
          Day
        </th>
        <th className="font-bold sm:font-normal md:font-semibold md:text-gray-600 dark:md:text-gray-200 p-4">
          Chance&nbsp;of&nbsp;rain
        </th>
        <th className="font-bold sm:font-normal md:font-semibold md:text-gray-600 dark:md:text-gray-200 p-4">
          Humidity
        </th>
        <th className="font-bold sm:font-normal md:font-semibold md:text-gray-600 dark:md:text-gray-200 p-4">
          Pressure
        </th>
        <th className="font-bold sm:font-normal md:font-semibold md:text-gray-600 dark:md:text-gray-200 p-4">
          Min
        </th>
        <th className="font-bold sm:font-normal md:font-semibold md:text-gray-600 dark:md:text-gray-200 p-4">
          Max
        </th>
      </tr>
    </thead>
  );
}
