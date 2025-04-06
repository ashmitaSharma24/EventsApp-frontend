import { useState } from "react";

export const HeroSection = () => {
  const slides = [
    'https://static.vecteezy.com/system/resources/thumbnails/000/271/024/small_2x/9.jpg',
    'https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg',
    'https://i.ytimg.com/vi/4wSJsAIuwSY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAt9WSB_D429NyEpEgU7MK8JKuOiw',
      ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide=()=>{
    if(currentSlide==0){
        setCurrentSlide(slides.length-1);
    }
    else{
        setCurrentSlide(currentSlide-1);
    }
}
const nextSlide=()=>{
    if(currentSlide==slides.length-1){
        setCurrentSlide(0);
    }
    else{
        setCurrentSlide(currentSlide+1);
    }
}

  return (
    <div className="relative w-full h-[380px] overflow-hidden">
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide}`}
        className="w-full h-full p-4 object-cover transition-all duration-500"
      />

      {/* Navigation Buttons (optional) */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
      >
        
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
      >
        
      </button>
    </div>
  );
};
