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
  const [konamiActive, setKonamiActive] = useState(false);
  const [devtoolsActive, setDevtoolsActive] = useState(false);
  const [keySequence, setKeySequence] = useState([]);

  const audioRef = useRef(null);

  //theme on refresh
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // serach results
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

  // easter eggs
  // konami
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeySequence((prev) => {
        const newSequence = [...prev, e.key].slice(-konamiCode.length);

        if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
          console.log("🎉 You're a nerd!");
          audioRef.current?.play();
          setKonamiActive(true);
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  // devtools
  useEffect(() => {
    let devtoolsOpen = false;
    const threshold = 160; //pixels of difference when DevTools is docked

    const checkDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if ((widthDiff > threshold || heightDiff > threshold) && !devtoolsOpen) {
        devtoolsOpen = true;
        console.log(
          "%cYou found the secret console! 🤫",
          "color: cyan; font-size: 18px; font-weight: bold;"
        );
        setDevtoolsActive(true); //start animation
      } else if (widthDiff <= threshold && heightDiff <= threshold && devtoolsOpen) {
        devtoolsOpen = false;
        setDevtoolsActive(false);
      }
    };
    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}easter-egg.wav`} preload="auto" />
      <div
        className={`app ${darkMode ? "app app--dark" : "app app--light"} ${
          devtoolsActive ? "app--matrix" : ""
        }`}
      >
        <Sidebar
          notes={notes}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          konamiActive={konamiActive}
          devtoolsActive={devtoolsActive}
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
