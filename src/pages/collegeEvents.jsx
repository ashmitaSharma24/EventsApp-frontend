import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../utils/event-service.js';
import { EventCard } from '../components/eventCard.jsx';
import { Background } from '../components/background.jsx';

export const CollegeEvents = () => {
  const [events, setEvents] = useState([]);
 

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents("", ""); // You can pass filters here
      if (data) setEvents(data.slice(0,12));
    };

    loadEvents();
  }, []);

  return (
    <Background>
      <div className="mt-5 px-4 md:px-12 lg:px-20 mb-20">
      <h1 className="text-2xl font-bold mb-8">College Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {events.map(event => (
  <EventCard key={event._id} event={event} />
))}
      </div>
    </div>
    </Background>
    
  );
};
