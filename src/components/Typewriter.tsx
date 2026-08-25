import { useEffect, useRef, useState } from "react";

// Content freeze: this is the one and only phrase, exactly as before.
const PHRASE = "AI Developer & ML Engineer \u{1F44B}";

export const Typewriter = () => {
  const [count, setCount] = useState(0);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceRef.current) return;

    const graphemes = Array.from(PHRASE);
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= graphemes.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, []);

  const done = count >= Array.from(PHRASE).length;

  return (
    <span className="whitespace-nowrap">
      <span className="sr-only">{PHRASE}</span>
      <span aria-hidden="true">
        {Array.from(PHRASE)
          .slice(0, count)
          .join("")}
      </span>
      {!done && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1.05em] align-text-bottom ml-[2px] bg-secondary caret-blink"
        />
      )}
    </span>
  );
};
