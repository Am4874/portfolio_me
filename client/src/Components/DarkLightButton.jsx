import useTheme from "../context/theme";
import { CiLight, CiDark } from "react-icons/ci";

function DarkLightButton() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      title={`Switch to ${themeMode === "light" ? "Dark" : "Light"} Mode`}
    >
      {themeMode === "light" ? <CiDark /> : <CiLight />}
    </button>
  );
}

export default DarkLightButton;
