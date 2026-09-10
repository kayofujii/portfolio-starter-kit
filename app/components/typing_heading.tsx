"use client";

import { useEffect, useState } from "react";

type TypingLineProps = {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export default function TypingLine({
  words,
  className = "",
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1100,
}: TypingLineProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;
    // Split by Unicode code point, not UTF-16 code unit, so emoji
    // (surrogate pairs) are never sliced in half mid-animation.
    const currentWordChars = Array.from(words[wordIndex]);
    const textChars = Array.from(text);

    if (phase === "typing") {
      if (textChars.length < currentWordChars.length) {
        const timeout = setTimeout(
          () => setText(currentWordChars.slice(0, textChars.length + 1).join("")),
          typingSpeed
        );
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
      return () => clearTimeout(timeout);
    }

    // phase === "deleting"
    if (textChars.length > 0) {
      const timeout = setTimeout(
        () => setText(textChars.slice(0, -1).join("")),
        deletingSpeed
      );
      return () => clearTimeout(timeout);
    }
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [phase, text, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span
          className="ml-0.5 inline-block w-[2px] bg-current align-middle"
          style={{ height: "0.85em", animation: "cursor-blink 1s step-end infinite" }}
        />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
