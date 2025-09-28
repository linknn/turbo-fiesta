import React from "react";
import "./Sidebar.css";

export default function Sidebar({
  notes,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  children,
  konamiActive,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2 className={`sidebar__title ${konamiActive ? "sidebar__title--rainbow" : ""}`}>
          Cheat Sheet
        </h2>
        {children /* Theme toggle will be passed in here */}
      </div>

      <div className="sidebar__search-wrapper">
        <span className="sidebar__search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sidebar__search"
        />
      </div>

      <nav className="sidebar__nav">
        {Object.keys(notes).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSearchQuery("");
            }}
            className={`sidebar__button ${
              activeCategory === category ? "sidebar__button--active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
}
