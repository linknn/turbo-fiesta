import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Overlay from "./components/Overlay/Overlay";

import "./components/base/reset.css";
import "./App.css";
import Header from "./components/Header/Header";

import { useNotes } from "./hooks/useNotes";

// const flattenNotes = (grouped) =>
//   Object.values(grouped).reduce((acc, group) => ({ ...acc, ...group }), {});

// const notes = {
//   ...flattenNotes(groupedNotes),
//   Todo: featureNotes,
// };

export default function CheatSheetApp() {
  const { groupedNotes, notes } = useNotes();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const [activeCategory, setActiveCategory] = useState("CSS");
  const [searchQuery, setSearchQuery] = useState("");
  const [konamiActive, setKonamiActive] = useState(false);
  const [devtoolsActive, setDevtoolsActive] = useState(false);
  const [, setKeySequence] = useState([]);

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

  useEffect(() => {
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"];
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
          "%cShh code is sleeping here 🤫😴💤",
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

  // overlay
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowOverlay(true);
    }, 1800000); //1800000 = 30 minutes
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
        <Header darkMode={darkMode} setDarkMode={setDarkMode} konamiActive={konamiActive} />

        <div className="app__body">
          <Sidebar
            groupedNotes={groupedNotes}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            konamiActive={konamiActive}
            devtoolsActive={devtoolsActive}
          ></Sidebar>

          <Main
            activeCategory={activeCategory}
            notes={notes}
            searchQuery={searchQuery}
            searchResults={searchResults}
          />
        </div>

        <button
          className={`floating__button ${
            activeCategory === "ToDo" ? "floating__button--active" : ""
          }`}
          aria-label="Show future features"
          onClick={() => {
            // clear search so Main will render the category view
            setSearchQuery("");
            // switch the active category to your feature note
            setActiveCategory("ToDo");
          }}
        >
          📝
        </button>

        <Overlay show={showOverlay} onClose={() => setShowOverlay(false)} />
      </div>
    </>
  );
}
