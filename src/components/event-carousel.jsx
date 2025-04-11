import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { EventCard } from "./eventCard";

export const EventCarousel = ({ events, category }) => {
  const visibleCount = 4;
  const [startIndex, setStartIndex] = useState(0);
  const total = events.length;

  const getVisibleItems = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (startIndex + i) % total;
      return events[index];
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
      <h1 className="text-black font-semibold text-3xl mt-3 mb-6">{category}</h1>

      <div className="relative flex items-center w-full">
        {/* Left Arrow */}
        <FaAngleLeft
          size={48}
          onClick={prev}
          className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:scale-125 transition"
        />

        {/* Carousel Items */}
        <div className="flex gap-4 justify-center overflow-hidden w-full px-4">
          {getVisibleItems().map((event, index) => (
            <div key={index} className="w-64 flex-shrink-0">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <FaAngleRight
          size={48}
          onClick={next}
          className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:scale-125 transition"
        />
      </div>
    </div>
  );
};
