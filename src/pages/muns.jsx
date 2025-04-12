import { useEffect, useState } from "react";
import { fetchEvents } from "../utils/event-service";
import { EventCard } from "../components/eventCard";
import { Background } from "../components/background";

export const Muns = () => {
  const [muns, setMuns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEvents("mun/debate", ""); // or adjust category string
      setMuns(data || []);
    };

    fetchData();
  }, []);

  return (
    <Background>
      <div className="mt-5 px-4 md:px-12 lg:px-20 mb-20">
                    <h1 className="text-2xl font-bold mb-8">ALL MUNs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {muns.map(m => (
                <EventCard key={m._id} event={m} />
              ))}
                    </div>
                  </div>
    </Background>
  );
};
