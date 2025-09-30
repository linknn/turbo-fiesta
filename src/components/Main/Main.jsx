import React from "react";
import "./Main.css";
import NoteCard from "../NoteCard/NoteCard";

export default function Main({ activeCategory, notes, searchQuery, searchResults }) {
  return (
    <main className="main">
      {searchQuery ? (
        <>
          <h1 className="main__title">Search Results for: "{searchQuery}"</h1>
          {Object.keys(searchResults).length > 0 ? (
            Object.entries(searchResults).map(([category, noteList]) => (
              <div key={category} className="main__search-result">
                <h2 className="main__search-category">{category}</h2>
                <div className="main__notes">
                  {noteList.map((note, idx) => (
                    <NoteCard key={idx} title={note.title} content={note.content} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="main__no-results">No results found.</p>
          )}
        </>
      ) : (
        <>
          <h1 className="main__title">{activeCategory}</h1>
          <div className="main__notes">
            {notes[activeCategory].map((note, idx) => (
              <NoteCard key={idx} title={note.title} content={note.content} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
