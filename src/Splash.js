import React, { useEffect, useRef } from "react";
import "./App.css"; // splash styles live here

/**
 * Displays a logo + progress bar, then fades out and calls onFinish
 * @param {{onFinish: () => void}} props
 */
export default function Splash({ onFinish }) {
  const splashRef = useRef(null);

  useEffect(() => {
    // length (ms) of progress bar animation declared in CSS
    const PROGRESS_MS = 1800;
    const FADE_MS = 200;

    // trigger fade after bar fills
    const fadeTimer = setTimeout(() => {
      splashRef.current?.classList.add("fade-out");
    }, PROGRESS_MS);

    // unmount splash after fade completes
    const doneTimer = setTimeout(() => {
      onFinish();
    }, PROGRESS_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div className="splash-screen" ref={splashRef}>
      <img src="/icon.png" alt="Borkenburg logo" className="splash-logo" />
      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
}