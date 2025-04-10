import { events_api } from './APIs';

export async function fetchEvents(category, genre) {
  try {
    const response = await fetch("/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();
    console.log("Raw response body:", text);

    const allEvents = JSON.parse(text);

    const filteredEvents = allEvents.filter((event) => {
      const matchesCategory = category ? event.category === category : true;
      const matchesGenre = genre ? event.genre === genre : true;
      return matchesCategory && matchesGenre;
    });

    console.log("Filtered Events:", filteredEvents);
    return filteredEvents; // ✅ important!
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return []; // ✅ return an empty array on error
  }
}
