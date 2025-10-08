import React from "react";
import "./Sidebar.css";

export default function Sidebar({
  groupedNotes,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  isMobileSidebarOpen,
}) {
  return (
    <aside className={`sidebar ${isMobileSidebarOpen ? "sidebar--open" : ""}`}>
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
        {Object.entries(groupedNotes).map(([groupName, groupNotes]) => (
          <div key={groupName} className="sidebar__group">
            <h3 className="sidebar__group-title">{groupName}</h3>
            {Object.keys(groupNotes).map((category) => (
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
          </div>
        ))}
      </nav>
    </aside>
  );
}
