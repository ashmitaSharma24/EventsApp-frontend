import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../utils/event-service.js';

export const CollegeEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents("", ""); // You can pass filters here
      if (data) setEvents(data);
    };

    loadEvents();
  }, []);

  return (
    <div className="mt-20 px-6">
      <h1 className="text-2xl font-bold mb-4">College Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event._id} className="p-4 shadow-lg rounded-lg bg-white text-black">
            <h2 className="font-semibold">{event.title}</h2>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
