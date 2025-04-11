import { useEffect, useState } from "react";
import { fetchEvents } from "../utils/event-service";
import { EventCard } from "../components/eventCard";
import { Background } from "../components/background";

export const Fests = () => {
  const [fests, setFests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEvents("fest", ""); // or adjust category string
      setFests(data || []);
    };

    fetchData();
  }, []);

  return (
    <Background>
      <div className="mt-5 px-6 mb-20">
                    <h1 className="text-2xl font-bold mb-8">ALL FESTS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {fests.map(f => (
                <EventCard key={f._id} event={f} />
              ))}
                    </div>
                  </div>
    </Background>
  );
};
