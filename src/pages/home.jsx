import { Carousel } from "../components/carousel";
import { CarouselButton} from "../components/carousel-button";
import { GridElement } from "../components/gridElement";
import { HeroSection } from "../components/hero-section";

export const Home = () => {
    return (
       <div className="scrollbar-hide mt-20">
        <HeroSection/>
        <Carousel/>
        <CarouselButton/>
        <GridElement bgColor="bg-green-500" text="Hackathons"/>
       </div>
    );
};
