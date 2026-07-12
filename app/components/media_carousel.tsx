"use client";

import { useState } from "react";
import type { WorkDetailMedia } from "app/development/data";

type MediaCarouselProps = {
  media: WorkDetailMedia[];
  title: string;
};

export default function MediaCarousel({ media, title }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-lg shadow-md bg-neutral-100">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {media.map((item, index) => (
          <div
            key={item.src}
            style={{
              minWidth: "100%",
              width: "100%",
              flexShrink: 0,
            }}
          >
            {item.type === "image" ? (
              <img
                className="h-auto w-full max-h-[750px] object-contain mx-auto"
                src={item.src}
                alt={item.alt ?? `${title} - Slide ${index + 1}`}
              />
            ) : (
              <video
                className="h-auto w-full max-h-[750px] object-contain mx-auto"
                src={item.src}
                poster={item.poster}
                controls
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 hover:bg-white/95 text-[#333333] shadow-md transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 cursor-pointer"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 hover:bg-white/95 text-[#333333] shadow-md transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 cursor-pointer"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-6 bg-[#006a68]"
                : "w-2 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
