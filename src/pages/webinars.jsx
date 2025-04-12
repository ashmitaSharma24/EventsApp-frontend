// pages/WebinarsPage.jsx
import { useEffect, useState } from "react";
import { fetchEvents } from "../utils/event-service";
import { EventCard } from "../components/eventCard";
import { Background } from "../components/background";

export const Webinars = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEvents("webinar", ""); // or adjust category string
      setWebinars(data || []);
    };

    fetchData();
  }, []);

  return (
    <Background>
      <div className="mt-5 px-4 md:px-12 lg:px-20 mb-20">
                    <h1 className="text-2xl font-bold mb-8">ALL WEBINARS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {webinars.map(w => (
                <EventCard key={w._id} event={w} />
              ))}
                    </div>
                  </div>
    </Background>
  );
};
