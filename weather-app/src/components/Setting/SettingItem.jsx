/* eslint-disable react/prop-types */
export default function SettingItem({ label, shortcut, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 md:gap-3 p-4 md:p-3 text-[1.2rem] md:text-base dark:hover:bg-[#072a66] hover:bg-blue-100 ease-in-out duration-100"
    >
      <span className="inline-block w-6">{icon}</span>
      <span className="grow dark:text-gray-100 font-bold text-left">
        {label}
      </span>
      <span className="hidden md:inline-block grow text-right dark:text-gray-300">
        ({shortcut})
      </span>
    </button>
  );
}
