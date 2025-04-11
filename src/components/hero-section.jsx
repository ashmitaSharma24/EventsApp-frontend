import { useState } from "react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

export const HeroSection = () => {
  const slides = [
    'https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/67f03107dc48d_whatsapp_image_2025-04-04_at_21.38.23.jpeg?d=1280x371',
    'https://assets.devfolio.co/hackathons/26f627d605a94ad4a41bfc386c0cebe6/assets/cover/578.png',
    'https://assets.devfolio.co/hackathons/224768a615a64e36b93a822b879befd6/assets/cover/603.png',
    'https://uploads.tickettailor.com/c_scale,w_1920/v1/production/userfiles/x0wziiown12pbwivoo6e.jpg?_a=BAAAV6DQ',
    'https://i.ytimg.com/vi/kATDBCuwKyI/maxresdefault.jpg',
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
    { /* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
      >
        
      </button>*/}
       <FaAngleLeft
  size={52}
  onClick={prevSlide}
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:scale-125 transition"
/>

<FaAngleRight
  size={52}
  onClick={nextSlide}
  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:scale-125 transition"
/>
    </div>
  );
};
