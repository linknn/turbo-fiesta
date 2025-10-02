import React from "react";
import "./Main.css";

export default function Main({ activeCategory, notes, searchQuery, searchResults }) {
  return (
    <main className="main">
      {searchQuery ? (
        <>
          <h1 className="main__title">Search Results for: "{searchQuery}"</h1>
          {Object.keys(searchResults).length > 0 ? (
            Object.entries(searchResults).map(([category, lines]) => (
              <div key={category} className="main__search-result">
                <h2 className="main__search-category">{category}</h2>
                <pre className="main__notes">{lines.join("\n")}</pre>
              </div>
            ))
          ) : (
            <p className="main__no-results">No results found.</p>
          )}
        </>
      ) : (
        <>
          <h1 className="main__title">{activeCategory}</h1>
          <pre className="main__notes">{notes[activeCategory]}</pre>
        </>
      )}
    </main>
  );
}
