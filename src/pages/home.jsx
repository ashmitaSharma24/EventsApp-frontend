import { Carousel } from "../components/carousel";
import { CarouselButton} from "../components/carousel-button";
import { GridElement } from "../components/gridElement";
import { HeroSection } from "../components/hero-section";
import { categories, genres } from "../utils/slides";

export const Home = () => {
    return (
       <div className="scrollbar-hide mt-20">
        <HeroSection/>
        <Carousel/>
        <CarouselButton slides={categories} title={"Browse Events By Category"}/>
        <CarouselButton slides={genres} title={"Browse Events By Genre"}/>
       </div>
    );
};
