import { useEffect } from "react";

export default function useKonamiCode(setKonamiActive, audioRef) {
  useEffect(() => {
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"];
    let sequence = [];

    const handleKeyDown = (e) => {
      sequence = [...sequence, e.key].slice(-konamiCode.length);
      if (JSON.stringify(sequence) === JSON.stringify(konamiCode)) {
        console.log("🎉 You're a nerd!");
        audioRef.current?.play();
        setKonamiActive(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setKonamiActive, audioRef]);
}
