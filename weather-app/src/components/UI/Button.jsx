/* eslint-disable react/prop-types */
export default function Button({
  children,
  onClick,
  sizeClass = "h-10 w-10",
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`dark:bg-[#1a4691] bg-gray-200 dark:hover:bg-[#09274b] hover:bg-gray-300 flex justify-center items-center rounded-full ${sizeClass}`}
    >
      {children}
    </button>
  );
}
