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
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const [activeCategory, setActiveCategory] = useState("CSS");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Get search results across all categories
  const getSearchResults = () => {
    const results = {};
    const query = searchQuery.toLowerCase();

    Object.entries(notes).forEach(([category, content]) => {
      const lines = content.split("\n").filter((line) => line.toLowerCase().includes(query));
      if (lines.length > 0) {
        results[category] = lines;
      }
    });

    return results;
  };

  const searchResults = searchQuery ? getSearchResults() : null;

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

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />

          <nav className="nav">
            {Object.keys(notes).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSearchQuery(""); // reset search when clicking category
                }}
                className={`nav-button ${activeCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main">
          {searchQuery ? (
            <>
              <h1 className="main-title">Search Results for: "{searchQuery}"</h1>
              {Object.keys(searchResults).length > 0 ? (
                Object.entries(searchResults).map(([category, lines]) => (
                  <div key={category} className="search-result-category">
                    <h2>{category}</h2>
                    <pre className="notes">{lines.join("\n")}</pre>
                  </div>
                ))
              ) : (
                <p>No results found.</p>
              )}
            </>
          ) : (
            <>
              <h1 className="main-title">{activeCategory}</h1>
              <pre className="notes">{notes[activeCategory]}</pre>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
