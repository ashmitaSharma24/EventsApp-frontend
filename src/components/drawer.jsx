import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';

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
                enterFrom="translate-x-0"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-0"
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
                  <div className="px-6 py-4 space-y-4">
                    <p className="text-sm text-gray-700">
                      You can populate this drawer with profile details, settings, etc.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-gray-600">
                      This is a sample section inside the drawer.
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
