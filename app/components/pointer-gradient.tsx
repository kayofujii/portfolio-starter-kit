"use client";

import { useEffect, useRef, useState } from "react";

export default function PointerGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 60 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleMove(e: MouseEvent) {
      const rect = node!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
      });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(60% 55% at ${pos.x}% ${pos.y}%, rgba(212, 252, 121, 0.55) 0%, rgba(150, 230, 161, 0.4) 40%, rgba(255, 255, 255, 0) 75%)`,
        opacity: 0,
        animation: "gradient-fade-in 1.8s ease-out 0.2s forwards",
      }}
    />
  );
}
