import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";

export const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const toggleSave = () => setSaved(!saved);

  if (!event) return null;

  const {
    image = "/placeholder.png",
    title = "Untitled Event",
    category = "General",
    genre = "None",
    date,
    time = "To be announced",
    venue = "Venue not specified",
    college = "Unknown College"
  } = event;

  const formattedDate = date ? new Date(date).toLocaleDateString() : "Date TBA";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl hover:cursor-pointer duration-300 w-64 min-h-[420px] flex flex-col">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Title & Icons Row */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gray-800 truncate w-40">{title}</h2>
          <div className="flex gap-2">
            <button onClick={toggleLike} title="Like">
              <AiFillHeart
                size={22}
                className={`transition-colors ${liked ? "text-red-500" : "text-gray-400"}`}
              />
            </button>
            <button onClick={toggleSave} title="Save">
              <BsBookmarkFill
                size={20}
                className={`transition-colors ${saved ? "text-gray-900" : "text-gray-400"}`}
              />
            </button>
          </div>
        </div>

        {/* Category & Genre */}
        <div className="text-sm text-gray-500 flex gap-2 flex-wrap mb-1">
          <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{genre}</span>
        </div>

        {/* Date, Time, Venue */}
        <div className="text-sm text-gray-600 space-y-1 mb-2">
          <p>📅 {formattedDate}</p>
          <p>⏰ {time}</p>
          <p className="text-gray-700">📍 {venue}</p>
        </div>

        {/* College */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          {college}
        </p>

        {/* Register Button */}
        <button className="bg-blue-950 text-white font-bold w-full py-2 rounded hover:bg-blue-900 transition-all mt-auto">
          Register Now
        </button>
      </div>
    </div>
  );
};
