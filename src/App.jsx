import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import cssNotes from "./notes/css";
import jsNotes from "./notes/javascript";
import expressNotes from "./notes/express";
import mongoNotes from "./notes/mongoDB";
import miscNotes from "./notes/misc";
import bemNotes from "./notes/bem";
import bashNotes from "./notes/git-bash";

import "./components/base/reset.css";
import "./App.css";

const notes = {
  CSS: cssNotes,
  BEM: bemNotes,
  "Git Bash": bashNotes,
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

  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"];
  const [easterEggActive, setEasterEggActive] = useState(false);

  const [keySequence, setKeySequence] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeySequence((prev) => {
        const newSequence = [...prev, e.key].slice(-konamiCode.length);

        if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
          console.log("🎉 You're a nerd!");
          audioRef.current?.play();
          setEasterEggActive(true);
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}easter-egg.wav`} preload="auto" />
      <div className={darkMode ? "app app--dark" : "app app--light"}>
        <Sidebar
          notes={notes}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          easterEggActive={easterEggActive}
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
    </>
  );
}
