
import { useEffect, useState } from "react";
import { Background } from "../components/background";
import { CarouselButton } from "../components/carousel-button";
import { EventCarousel } from "../components/event-carousel";
import { HeroSection } from "../components/hero-section";
import { categories, genres, loadEvents } from "../utils/slides";

export const Home = () => {
  const [events, setEvents] = useState({
    muns: [],
    hackathons: [],
    fest: [],
    all:[],

  });

  useEffect(() => {
    const fetchEventsData = async () => {
      const data = await loadEvents();
      setEvents(data);
    };

    fetchEventsData();
  }, []);

  return (
    <Background>
      <div className="scrollbar-hide">
        <HeroSection />
        <EventCarousel events={events.all.slice(0,8)} category="TRENDING NOW" />
        <CarouselButton slides={categories} title="Browse Events By Category" />
        <CarouselButton slides={genres} title="Browse Events By Genre" />
        <EventCarousel events={events.fest} category="FESTS" />
        <EventCarousel events={events.hackathons} category="HACKATHONS" />
        <EventCarousel events={events.muns} category="MUNS" />
        
      </div>
    </Background>
  );
};
