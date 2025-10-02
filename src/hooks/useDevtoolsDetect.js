import { useEffect } from "react";

export default function useDevtoolsDetect(setDevtoolsActive) {
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
  }, [setDevtoolsActive]);
}
