
import { FiUser, FiSearch, FiChevronDown } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav className="bg-[#081331] text-white px-8 py-4 flex items-center justify-between shadow-lg">
            {/* Left Section - Logo */}
            <div className="flex items-center gap-4">
                

                {/* Navigation Links */}
                <div className="flex gap-3">
                    <ul to="/popular-events" className="border border-white rounded-full px-4 py-2 font-semibold">
                        Popular Events
                    </ul>
                    <ul to="/free-events" className="border border-white rounded-full px-4 py-2 font-semibold">
                        college Events
                    </ul>
                    
                </div>
            </div>

            {/* Right Section - Options */}
            <div className="flex items-center gap-4">
                <ul to="/work-with-us" className="border border-white rounded-full px-4 py-2 font-semibold">
                    List your event 
                </ul>

                {/* Search Button (Not a Link) */}
                <button className="p-2 border border-white rounded-full">
                    <FiSearch size={24} />
                </button>

                {/* Location Dropdown */}
                <button className="flex items-center gap-1 border border-white text-white rounded-full px-4 py-2">
                    <FaMapMarkerAlt />
                    Online
                    <FiChevronDown />
                </button>

                {/* Profile Link */}
                <ul to="/profile" className="p-2 border border-white rounded-full">
                    <FiUser size={24} />
                </ul>
            </div>
        </nav>
    );
};
