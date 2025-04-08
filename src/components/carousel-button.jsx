import { useState } from "react";
import { GridElement } from "./gridElement";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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

      {/* Carousel with arrows */}
      <div className="relative flex items-center justify-between w-full">
        {/* Left Arrow */}
        <FaAngleLeft
          size={30}
          onClick={prev}
          className="cursor-pointer text-black hover:scale-125 transition"
        />

        {/* Carousel Items */}
        <div className="flex gap-4 justify-center overflow-visible w-full">
          {getVisibleItems().map((item, index) => (
            <GridElement
              key={index}
              bgColor={item.bgColor}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <FaAngleRight
          size={30}
          onClick={next}
          className="cursor-pointer text-black hover:scale-125 transition"
        />
      </div>
    </div>
  );
};
