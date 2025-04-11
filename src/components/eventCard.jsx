import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";

export const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const toggleSave = () => setSaved(!saved);

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
        {/* Title & Icons Row */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>
          <div className="flex gap-2">
            <button onClick={toggleLike} title="Like">
              <AiFillHeart
                size={24}
                className={`transition-colors ${liked ? "text-red-500" : "text-gray-400"}`}
              />
            </button>
            <button onClick={toggleSave} title="Save">
              <BsBookmarkFill
                size={22}
                className={`transition-colors ${saved ? "text-gray-900" : "text-gray-400"}`}
              />
            </button>
          </div>
        </div>

        {/* Category & Genre */}
        <div className="text-sm text-gray-500 flex gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded">{event.category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{event.genre}</span>
        </div>

        {/* Date & Time */}
        <p className="text-sm text-gray-600">📅 {new Date(event.date).toLocaleDateString()}</p>
        <p className="text-sm text-gray-600">⏰ {event.time}</p>

        {/* Venue */}
        <p className="text-sm text-gray-700">📍 {event.venue}</p>

        {/* College */}
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {event.college}
        </p>

        {/* Register Button */}
        <div className="flex justify-between items-center mt-3">
          <button className="bg-blue-950 text-white font-bold px-4 py-2 rounded hover:bg-blue-900 transition-all">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};
