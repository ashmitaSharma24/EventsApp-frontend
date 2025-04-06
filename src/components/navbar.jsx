import { Link, Route, Routes } from "react-router-dom";
import { FiUser, FiSearch, FiChevronDown } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { AddEvents } from "../pages/addEventPage";
import { CollegeEvents } from "../pages/collegeEvents";
import { PopularEvents } from "../pages/popularEvents";

export const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#081331] text-white px-8 py-4 flex items-center justify-between shadow-lg">

                {/* Left Section - Navigation Links */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-3">
                        <Link to="/profile" className="p-2 border border-white rounded-full">
                            <FiUser size={24} />
                        </Link>
                        <Link to="/" className="border border-white rounded-full px-4 py-2 font-semibold">
                            Home
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
                        List your event 
                    </Link>

                    {/* Search Button */}
                    <button className="p-2 border border-white rounded-full">
                        <FiSearch size={24} />
                    </button>

                    {/* Location Dropdown */}
                    <button className="flex items-center gap-1 border border-white text-white rounded-full px-4 py-2">
                        <FaMapMarkerAlt />
                        Online
                        <FiChevronDown />
                    </button>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-event" element={<AddEvents />} />
                <Route path="/college-events" element={<CollegeEvents />} />
                <Route path="/popular-events" element={<PopularEvents />} />
            </Routes>
        </div>
    );
};
