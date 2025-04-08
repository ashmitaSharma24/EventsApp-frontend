import React, { useState } from 'react';
import { Background } from '../components/background';

export const AddEvents = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    date: '',
    time: '',
    venue:'',
    genre:'',
    college: '',
    register_deadline:'',
    imageUrl: '',
    register_link:'',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event data submitted:', formData);
    // Here you can POST this data to a backend using axios or fetch
  };

  var backgroundImage ="https://rare-gallery.com/thumbs/366887-4k-wallpaper.jpg"; // Example image URL

  return (
    <Background>
    <div 
        className="flex justify-center items-center min-h-screen bg-gray-100 pb-10 pt-20 mt-10"
        style={{
            backgroundImage: `url(${backgroundImage})`, // Adjust if you're hosting it locally or via public folder
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Event</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Event Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          
          <div >
            <label className="block mb-1 font-semibold">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>


          <div >
            <label className="block mb-1 font-semibold">College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Registeration Deadline</label>
            <input
              type="date"
              name="register_deadline"
              value={formData.register_deadline}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Registration Link</label>
            <input
              type="url"
              name="register_link"
              value={formData.register_link}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-900 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Submit Event
        </button>
      </form>
    </div>
    </Background>
  );
};

