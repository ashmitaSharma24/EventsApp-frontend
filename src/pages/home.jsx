import { Carousel } from "../components/carousel";
import { HeroSection } from "../components/hero-section";

export const Home = () => {
    return (
       <div className="scrollbar-hide mt-20">
        <HeroSection/>
        <Carousel/>
       </div>
    );
};
