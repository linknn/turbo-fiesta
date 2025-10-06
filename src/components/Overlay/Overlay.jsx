import React from "react";
import "./Overlay.css";

export default function Overlay({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="overlay__content">
        <h2>Time to drink water!</h2>
        <p>Take a quick stretch too</p>
        <button className="overlay__button" onClick={onClose}>
          화이팅 ✊
        </button>
      </div>
    </div>
  );
}
