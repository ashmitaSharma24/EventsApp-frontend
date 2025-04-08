import { useState } from "react";
import { GridElement } from "./gridElement"; // adjust path as needed

export const CarouselButton = ({ slides, title }) => {
  const visibleCount = 5;
  const [startIndex, setStartIndex] = useState(0);
  const total = slides.length;

  const getVisibleItems = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (startIndex + i) % total;
      return slides[index];
    });
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative w-full px-6 py-4 mb-10">
      <h1 className="text-black font-semibold text-3xl mt-3 mb-6">{title}</h1>
      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute  bg-black/50 text-white px-3 py-2 rounded z-10"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded z-10"
      >
        ▶
      </button>

      {/* GridElement Carousel */}
      <div className="flex gap-6 justify-center overflow-visible">
        {getVisibleItems().map((item, index) => (
          <GridElement
            key={index}
            bgColor={item.bgColor}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
