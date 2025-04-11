// components/StaticDrawer.jsx
import { FaUserCircle, FaUserPlus, FaHistory, FaBookmark, FaAtom } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StaticDrawer = () => {
  return (
    <div className="w-64 h-full bg-white shadow-md border-r fixed left-0 top-0">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-medium text-gray-900">Profile</h2>
      </div>

      {/* Profile Section */}
      <div className="px-6 py-4 border-b">
        <div className="flex items-center space-x-4">
          <FaUserCircle className="w-14 h-14 text-gray-400" />
          <div>
            <h3 className="text-md font-semibold text-gray-900">User Name</h3>
            <p className="text-sm text-gray-600">user email-id</p>
            <Link to="/profile" className="text-blue-500 text-sm hover:underline">View Profile</Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 py-4 text-sm text-gray-800">
        <p className="font-semibold mb-2 text-gray-700">For Users</p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <FaUserPlus className="text-gray-500" />
            <Link to="/registrations" className="hover:text-blue-500">My Registrations/Applications</Link>
            <hr className="border-t border-gray-200 mt-2" />
          </li>
          <li className="flex items-center space-x-2">
            <FaHistory className="text-gray-500" />
            <Link to="/recently-viewed" className="hover:text-blue-500">Recently Viewed</Link>
            <hr className="border-t border-gray-200 mt-2" />
          </li>
          <li className="flex items-center space-x-2">
            <FaBookmark className="text-gray-500" />
            <Link to="/saved-events" className="hover:text-blue-500">Saved Events</Link>
            <hr className="border-t border-gray-200 mt-2" />
          </li>
          <li className="flex items-center space-x-2">
            <FaAtom className="text-gray-500" />
            <Link to="/settings" className="hover:text-blue-500">Settings</Link>
            <hr className="border-t border-gray-200 mt-2" />
          </li>
        </ul>

        <div className="mt-6">
          <button
            onClick={() => {
              console.log('Logging out...');
            }}
            className="w-full flex items-center justify-center text-black border border-black bg-white hover:bg-gray-100 py-2 rounded-full space-x-2"
          >
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaticDrawer;
