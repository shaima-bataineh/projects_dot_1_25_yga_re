import React, { useState, useEffect } from "react";

function TypingEffect({ text, speed = 300 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    const words = text.split(" ");

    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex] + " ");
        setWordIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout); // تنظيف الـ timeout عند إعادة render
    }
  }, [wordIndex, text, speed]);

  return (
    <h1 className={`hero-title ${wordIndex >= text.split(" ").length ? "cursor-hidden" : ""}`}>
      {displayedText}
    </h1>
  );
}

export default TypingEffect;
