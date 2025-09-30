import React from "react";
import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header({ darkMode, setDarkMode, konamiActive }) {
  return (
    <header className="header">
      <h1 className={`header__title ${konamiActive ? "header__title--rainbow" : ""}`}>
        Cheat Sheet
      </h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}
