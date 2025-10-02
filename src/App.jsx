import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Overlay from "./components/Overlay/Overlay";

import "./components/base/reset.css";
import "./App.css";
import Header from "./components/Header/Header";

import { useNotes } from "./hooks/useNotes";
import useThemePersistence from "./hooks/useThemePersistence";
import useKonamiCode from "./hooks/useKonamiCode";
import useDevtoolsDetect from "./hooks/useDevtoolsDetect";

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

  const audioRef = useRef(null);

  // hooks
  useThemePersistence(darkMode);
  useKonamiCode(setKonamiActive, audioRef);
  useDevtoolsDetect(setDevtoolsActive);

  // search results
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
