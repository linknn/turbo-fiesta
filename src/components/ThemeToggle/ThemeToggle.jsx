import React from "react";
import "./ThemeToggle.css";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
