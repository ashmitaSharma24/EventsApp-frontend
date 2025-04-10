export async function fetchEvents(category, genre) {
  try {
    const response = await fetch('/api/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true', // ❌ No longer needed
      },
    });

    const text = await response.text(); // 👈 read raw response
    console.log("Raw response body:", text); // 👈 debug what's coming

    let allEvents;
    try {
      allEvents = JSON.parse(text);
    } catch (jsonErr) {
      console.error("Response is not valid JSON.");
      return;
    }

    const filteredEvents = allEvents.filter(event => {
      const matchesCategory = category ? event.category === category : true;
      const matchesGenre = genre ? event.genre === genre : true;
      return matchesCategory && matchesGenre;
    });

    console.log("Filtered Events:", filteredEvents);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}
