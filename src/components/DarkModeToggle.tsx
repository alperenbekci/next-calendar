import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const DarkModeToggle = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <button
    onClick={() => setIsDarkMode((prev) => !prev)}
    className={`flex items-center gap-2 px-3 py-1 rounded transition ${
      isDarkMode
        ? "hover:text-blue-300 border border-neutral-500"
        : "hover:text-blue-500 border border-neutral-900"
    }`}
  >
    {isDarkMode ? (
      <SunIcon className="w-5 h-5" />
    ) : (
      <MoonIcon className="w-5 h-5" />
    )}
  </button>
);

export default DarkModeToggle;
