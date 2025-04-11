import React from "react";

export const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl hover:cursor-pointer duration-300">
      {/* Image */}
      <img
        src={event.image}
        alt={event.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>

        {/* Category & Genre */}
        <div className="text-sm text-gray-500 flex gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded">{event.category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{event.genre}</span>
        </div>

        {/* Date & Time */}
        <p className="text-sm text-gray-600">
          📅 {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600">
          ⏰ {event.time}
        </p>

        {/* Venue */}
        <p className="text-sm text-gray-700">📍 {event.venue}</p>

        {/* College */}
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {event.college}
        </p>
      </div>
    </div>
  );
};
