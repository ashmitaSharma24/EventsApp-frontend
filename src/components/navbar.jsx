import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiChevronDown } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Drawer } from "./drawer"; // adjust path if needed
import icon from '../assets/image-removebg-preview.png'



export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="top-0 left-0 w-full z-50 bg-[#081331] text-white px-8 py-4 flex items-center justify-between shadow-lg">
        {/* Left Section - Navigation Links */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            {/*<button>
              <img src={icon} />
            </button>*/}
            <button
              onClick={() => setIsDrawerOpen(prev => !prev)}
              className="p-2 border border-white rounded-full"
            >
              <FiUser size={24} />
            </button>

            <Link to="/home" className="border border-white rounded-full px-4 py-2 font-semibold">
              Home
            </Link>
            <Link to="/all-events" className="border border-white rounded-full px-4 py-2 font-semibold">
              All Events
            </Link>
            <Link to="/popular-events" className="border border-white rounded-full px-4 py-2 font-semibold">
              Popular Events
            </Link>
            <Link to="/college-events" className="border border-white rounded-full px-4 py-2 font-semibold">
              College Events
            </Link>
          </div>
        </div>

        {/* Right Section - Options */}
        <div className="flex items-center gap-4">
          <Link to="/add-event" className="border border-white rounded-full px-4 py-2 font-semibold">
            List an event
          </Link>

          <button className="p-2 border border-white rounded-full">
            <FiSearch size={24} />
          </button>

          <button className="flex items-center gap-1 border border-white text-white rounded-full px-4 py-2">
            <FaMapMarkerAlt />
            Online
            <FiChevronDown />
          </button>
        </div>
      </nav>

      {/* Drawer component */}
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};
