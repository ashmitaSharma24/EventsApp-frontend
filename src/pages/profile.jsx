// src/pages/Profile.jsx
import StaticDrawer from '../components/StaticDrawer'; // make sure the path is correct

export const Profile = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <StaticDrawer />

      {/* Main content */}
      <div className="ml-64 p-8 flex-1 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        <p className="text-gray-700">
          Welcome to your profile dashboard. Add your profile info and settings here.
        </p>
      </div>
    </div>
  );
};
