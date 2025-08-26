import React, { useState, useEffect } from 'react';
import './FadeText.css';

export default function FadeText({
  lines,
  displayDuration = 3000, // how long each line stays fully visible
  fadeDuration = 500,     // fade‐in & fade‐out time
}) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('fade-in'); // 'fade-in' | 'visible' | 'fade-out'

  useEffect(() => {
    let timer;
    if (phase === 'fade-in') {
      // after fadeDuration, switch to visible
      timer = setTimeout(() => setPhase('visible'), fadeDuration);
    } else if (phase === 'visible') {
      // after displayDuration, switch to fade-out
      timer = setTimeout(() => setPhase('fade-out'), displayDuration);
    } else {
      // fade-out complete, next line
      timer = setTimeout(() => {
        setIdx((i) => (i + 1) % lines.length);
        setPhase('fade-in');
      }, fadeDuration);
    }
    return () => clearTimeout(timer);
  }, [phase, fadeDuration, displayDuration, lines.length]);

  return (
    <div className="fade-text">
      <p className={`fade-line ${phase}`}>{lines[idx]}</p>
    </div>
  );
}
