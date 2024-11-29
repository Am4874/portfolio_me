import useTheme from "../context/theme";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons from react-icons

function ThemeButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleDarkTheme = () => {
    darkTheme();
  };

  const handleLightTheme = () => {
    lightTheme();
  };

  return (
    <div className="flex items-center space-x-4">
      {themeMode === "light" ? (
        <button
          onClick={handleDarkTheme}
          className="p-2 rounded-full bg-gray-200 text-gray-700"
          title="Switch to Dark Mode"
        >
          <FaMoon size={20} />
        </button>
      ) : (
        <button
          onClick={handleLightTheme}
          className="p-2 rounded-full bg-gray-200 text-gray-700"
          title="Switch to Light Mode"
        >
          <FaSun size={20} />
        </button>
      )}
    </div>
  );
}

export default ThemeButton;
