import { useState } from "react";

export const CarouselButton = () => {
  const gridel = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLdraY5ffC6jq2ceVNuxzRNoUGTdz7rtWFg&s',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLdraY5ffC6jq2ceVNuxzRNoUGTdz7rtWFg&s',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLdraY5ffC6jq2ceVNuxzRNoUGTdz7rtWFg&s',
  ];

  const visibleCount = 7; // Number of images visible at once
  const [startIndex, setStartIndex] = useState(0);
  const total = gridel.length;

  const getVisibleItems = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (startIndex + i) % total;
      return gridel[index];
    });
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative w-full px-6 py-4">
      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded z-10"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded z-10"
      >
        ▶
      </button>

      {/* Image Grid */}
      <div className="flex gap-6 justify-center overflow-hidden">
        {getVisibleItems().map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="rounded-xl shadow-lg h-[160px] aspect-square object-cover"
          />
        ))}
      </div>
    </div>
  );
};
