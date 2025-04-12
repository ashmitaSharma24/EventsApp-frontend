import React, { useState } from 'react';
import { Background } from '../components/background';

export const AddEvents = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    date: '',
    time: '',
    venue: '',
    genre: '',
    college: '',
    register_deadline: '',
    imageUrl: '',
    register_link: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.name,
          description: formData.description,
          category: formData.category,
          date: formData.date,
          time: formData.time,
          venue: formData.venue,
          genre: formData.genre,
          college: formData.college,
          image: formData.imageUrl,
          registeration_link: formData.register_link,
          registration_deadline: formData.register_deadline,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Event submitted successfully!');
        setFormData({
          name: '',
          description: '',
          category: '',
          date: '',
          time: '',
          venue: '',
          genre: '',
          college: '',
          register_deadline: '',
          imageUrl: '',
          register_link: '',
        });
      } else {
        alert('❌ Failed to submit event: ' + data.error);
      }
    } catch (error) {
      alert('❌ Error submitting event: ' + error.message);
    }
  };

  const backgroundImage = 'https://rare-gallery.com/thumbs/366887-4k-wallpaper.jpg';

  return (
    <Background>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100 pb-10 pt-20"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Add New Event</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Event Name" name="name" value={formData.name} onChange={handleChange} />
            <InputField label="Category" name="category" value={formData.category} onChange={handleChange} />
            <InputField type="date" label="Date" name="date" value={formData.date} onChange={handleChange} />
            <InputField type="time" label="Time" name="time" value={formData.time} onChange={handleChange} />
            <InputField label="Genre" name="genre" value={formData.genre} onChange={handleChange} />
            <InputField label="Venue" name="venue" value={formData.venue} onChange={handleChange} />
            <InputField label="College" name="college" value={formData.college} onChange={handleChange} />
            <InputField type="date" label="Registration Deadline" name="register_deadline" value={formData.register_deadline} onChange={handleChange} />
            <InputField type="url" label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
            <InputField type="url" label="Registration Link" name="register_link" value={formData.register_link} onChange={handleChange} />

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

const InputField = ({ type = 'text', label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 p-2 rounded-lg"
    />
  </div>
);
