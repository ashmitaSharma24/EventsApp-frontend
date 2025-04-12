import { useEffect, useState } from "react";
import { fetchEvents } from "../utils/event-service";
import { EventCard } from "../components/eventCard";
import { Background } from "../components/background";

export const Hackathons = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEvents("Hackathon", ""); // or adjust category string
      setHackathons(data || []);
    };

    fetchData();
  }, []);

  return (
    <Background>
      <div className="mt-5 px-4 md:px-12 lg:px-20 mb-20">
                    <h1 className="text-2xl font-bold mb-8">ALL HACKATHONS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {hackathons.map(h => (
                <EventCard key={h._id} event={h} />
              ))}
                    </div>
                  </div>
    </Background>
  );
};
