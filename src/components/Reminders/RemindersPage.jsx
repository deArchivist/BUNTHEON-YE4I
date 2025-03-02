import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import { HiOutlinePlus, HiOutlineTrash, HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi';
import { AppContext } from '../../contexts/AppContext';
import NewReminderForm from './NewReminderForm';

const RemindersPage = () => {
  const { userData, removeReminder } = useContext(AppContext);
  const [showNewForm, setShowNewForm] = useState(false);
  const [filter, setFilter] = useState('upcoming'); // upcoming, past, all
  
  // Get reminders from user data or use empty array
  const reminders = userData.reminders || [];
  
  // Filter reminders based on current filter
  const now = new Date();
  const filteredReminders = reminders.filter(reminder => {
    const reminderDate = new Date(reminder.date);
    if (filter === 'upcoming') {
      return reminderDate >= now;
    } else if (filter === 'past') {
      return reminderDate < now;
    }
    return true; // 'all' filter
  });
  
  // Sort by date (closest first for upcoming, most recent first for past)
  filteredReminders.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return filter === 'past' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-3 py-1 text-sm rounded-full border-2 ${
              filter === 'upcoming' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-3 py-1 text-sm rounded-full border-2 ${
              filter === 'past' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            Past
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-sm rounded-full border-2 ${
              filter === 'all' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            All
          </button>
        </div>
        <button
          onClick={() => setShowNewForm(true)}
          className="bg-primary text-white p-2 rounded-full shadow-pixel hover:shadow-pixel-md"
        >
          <HiOutlinePlus size={20} />
        </button>
      </div>
      
      {showNewForm && (
        <NewReminderForm 
          onClose={() => setShowNewForm(false)}
        />
      )}
      
      <div className="mt-6 space-y-4">
        {filteredReminders.length > 0 ? (
          filteredReminders.map(reminder => (
            <div key={reminder.id} className="pixel-card rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-semibold">{reminder.title}</h3>
                <button
                  onClick={() => removeReminder(reminder.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <HiOutlineTrash />
                </button>
              </div>
              
              <p className="text-gray-600 mt-2">{reminder.description}</p>
              
              <div className="flex items-center mt-3 text-sm text-gray-500">
                <HiOutlineCalendar className="mr-1" />
                <span>{format(new Date(reminder.date), 'MMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <HiOutlineClock className="mr-1" />
                <span>{format(new Date(reminder.date), 'h:mm a')}</span>
              </div>
              
              {reminder.subject && (
                <div className="mt-3">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                    {reminder.subject}
                  </span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            {filter === 'upcoming' && 'No upcoming reminders. Add one with the + button.'}
            {filter === 'past' && 'No past reminders.'}
            {filter === 'all' && 'No reminders yet. Add one with the + button.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default RemindersPage;
