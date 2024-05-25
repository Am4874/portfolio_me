import React, { useEffect, useState } from "react";
import { ThemeProvider } from "../context/theme";
import ThemeButton from "./ThemeButton";

function DarkLightButton() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    let html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div>
        <div>
          <div>
            <ThemeButton />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DarkLightButton;
