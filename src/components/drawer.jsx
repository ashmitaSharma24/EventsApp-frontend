import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { FaUserCircle, FaUserPlus, FaHistory, FaBookmark, FaAtom } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">

            {/* Background overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
            </Transition.Child>

            {/* Drawer panel */}
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-sm bg-white shadow-xl overflow-y-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-lg font-medium text-gray-900">Profile</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <IoClose size={24} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-4">
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

                    {/* Navigation Sections */}
                    <div className="px-6 py-4 text-sm text-gray-800">
                      <p className="font-semibold mb-2 text-gray-700">For Users</p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <FaUserPlus className="text-gray-500" />
                          <Link to="/registrations" className="hover:text-blue-500">My Registrations/Applications</Link>
                        </li>
                        <hr className="border-t border-gray-100 mt-2" />
                        <li className="flex items-center space-x-2">
                          <FaHistory className="text-gray-500" />
                          <Link to="/recently-viewed" className="hover:text-blue-500">Recently Viewed</Link>
                        </li>
                        <hr className="border-t border-gray-100 mt-2" />
                        <li className="flex items-center space-x-2">
                          <FaBookmark className="text-gray-500" />
                          <Link to="/saved-events" className="hover:text-blue-500">Saved Events</Link>
                        </li>
                        <hr className="border-t border-gray-100 mt-2" />
                        <li className="flex items-center space-x-2">
                          <FaAtom className="text-gray-500" />
                          <Link to="/settings" className="hover:text-blue-500">Settings</Link>
                        </li>
                        <hr className="border-t border-gray-100 mt-2" />
                      </ul>

                      {/* Logout Button */}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>

          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};