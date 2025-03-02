import React, { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { HiOutlineX } from 'react-icons/hi';

const NewReminderForm = ({ onClose }) => {
  const { addReminder } = useContext(AppContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    subject: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine date and time for storage
    const dateTime = new Date(`${formData.date}T${formData.time}`);
    
    addReminder({
      title: formData.title,
      description: formData.description,
      date: dateTime.toISOString(),
      subject: formData.subject
    });
    
    onClose();
  };

  return (
    <div className="pixel-card rounded-lg mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">New Reminder</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <HiOutlineX />
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="w-full pixel-input rounded-md"
            placeholder="Homework title or exam name"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="block text-sm text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
            className="w-full pixel-input rounded-md"
            placeholder="Details about the homework or exam"
            value={formData.description}
            onChange={handleChange}
            rows="2"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date</label>
            <input
              type="date"
              name="date"
              className="w-full pixel-input rounded-md"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Time</label>
            <input
              type="time"
              name="time"
              className="w-full pixel-input rounded-md"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Subject (Optional)</label>
          <input
            type="text"
            name="subject"
            className="w-full pixel-input rounded-md"
            placeholder="e.g. Mathematics, Physics, Literature"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border-2 border-gray-300 rounded-md mr-2 text-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="pixel-btn rounded-md"
          >
            Save Reminder
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReminderForm;
