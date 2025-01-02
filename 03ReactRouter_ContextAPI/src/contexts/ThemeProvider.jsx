import {useState, useEffect } from "react";
import { themeContext } from "./theme";

// ThemeProvider Component
export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <themeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </themeContext.Provider>
  );
}
