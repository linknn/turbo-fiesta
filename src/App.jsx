import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import cssNotes from "./notes/css";
import jsNotes from "./notes/javascript";
import expressNotes from "./notes/express";
import mongoNotes from "./notes/mongoDB";
import miscNotes from "./notes/misc";
import bemNotes from "./notes/bem";

import "./components/base/reset.css";
import "./App.css";

const notes = {
  CSS: cssNotes,
  BEM: bemNotes,
  JavaScript: jsNotes,
  MongoDB: mongoNotes,
  "Node & Express": expressNotes,
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
    <div className={darkMode ? "app app--dark" : "app app--light"}>
      <Sidebar
        notes={notes}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Sidebar>

      <Main
        activeCategory={activeCategory}
        notes={notes}
        searchQuery={searchQuery}
        searchResults={searchResults}
      />
    </div>
  );
}
