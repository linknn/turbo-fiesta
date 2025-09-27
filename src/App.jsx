import { useState, useEffect } from "react";

import cssNotes from "./notes/css";
import jsNotes from "./notes/javascript";
import expressNotes from "./notes/express";
import mongoNotes from "./notes/mongoDB";
import miscNotes from "./notes/misc";

import "./App.css";

const notes = {
  CSS: cssNotes,
  JavaScript: jsNotes,
  "Node & Express": expressNotes,
  MongoDB: mongoNotes,
  Miscellaneous: miscNotes,
};

export default function CheatSheetApp() {
  // Load initial theme from localStorage (default: light)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const [activeCategory, setActiveCategory] = useState("CSS");

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="app">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Cheat Sheet</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
          <nav className="nav">
            {Object.keys(notes).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`nav-button ${activeCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main">
          <h1 className="main-title">{activeCategory}</h1>
          <pre className="notes">{notes[activeCategory]}</pre>
        </main>
      </div>
    </div>
  );
}
