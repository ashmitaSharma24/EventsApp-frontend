import { Background } from "../components/background";
import { useState,useEffect } from "react";
import { fetchEvents } from "../utils/event-service";
import { EventCard } from "../components/eventCard";

export const PopularEvents=()=>{
    const [popularEvents, setPopularEvents] = useState([]);
    
    useEffect(() => {
        const loadEvents = async () => {
          const data = await fetchEvents("", ""); // You can pass filters here
          if (data) setPopularEvents(data.slice(0, 4)); // Only take first 4 events
        };
      
        loadEvents();
      }, []);
      
    return(
       <Background>
        <div className="mt-5 px-4 md:px-12 lg:px-20 mb-20">
              <h1 className="text-2xl font-bold mb-8">Popular Events</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularEvents.map(pe => (
          <EventCard key={pe._id} event={pe} />
        ))}
              </div>
            </div>
       </Background>
    );
}