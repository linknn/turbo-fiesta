import { useEffect } from "react";

export default function useThemePersistence(darkMode) {
  //theme on refresh
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
}
