import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../utils/event-service.js';
import { EventCard } from '../components/eventCard.jsx';
import { Background } from '../components/background.jsx';

export const AllEvents = () => {
  const [events, setEvents] = useState([]);

  /*
  {
  "_id":"67f4c8888967502c953633d4",
  "title":"Hackathon Mania",
  "description":"Join us for a hands-on experience and showcase your skills.",
  "category":"webinar",
  "date":"2025-05-12T00:00:00.000Z",
  "time":"11:00",
  "venue":"IGDTUW Auditorium",
  "genre":"Cultural",
  "college":"igdtuw",
  "image":"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "registeration_link":"https://example.com/event/1",
  "registration_deadline":"2025-04-10T00:00:00.000Z",
  "createdAt":"2025-04-08T06:56:07.736Z","__v":0
  }
  */ 

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents("", ""); // You can pass filters here
      if (data) setEvents(data);
    };

    loadEvents();
  }, []);

  return (
    <Background>
      <div className="mt-5 px-6 mb-20">
      <h1 className="text-2xl font-bold mb-8">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {events.map(event => (
  <EventCard key={event._id} event={event} />
))}
      </div>
    </div>
    </Background>
    
  );
};
