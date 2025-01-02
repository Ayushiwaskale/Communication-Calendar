import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: '2024-12-30', method: 'Email', description: 'Follow-up with Company A' },
    { date: '2024-12-28', method: 'LinkedIn Post', description: 'Announce product update' },
  ]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ method: '', description: '' });

  const formatDate = (date) => date.toISOString().split('T')[0];

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        date: formatDate(selectedDate),
        method: newEvent.method,
        description: newEvent.description,
      },
    ]);
    setShowAddEvent(false);
    setNewEvent({ method: '', description: '' });
  };

  const handleDeleteEvent = (index) => {
    const filteredEvents = events.filter((_, i) => i !== index);
    setEvents(filteredEvents);
  };

  const getEventsForDate = (date) => {
    const formattedDate = formatDate(date);
    return events.filter((event) => event.date === formattedDate);
  };

  return (
    <div className="calendar-page">
      <h1>Calendar</h1>
      <div className="calendar-box">
        <Calendar
          onChange={(date) => {
            setSelectedDate(date);
            setShowAddEvent(false);
          }}
          value={selectedDate}
        />
      </div>

      <div className="events-box">
        <h2>Events on {selectedDate.toDateString()}</h2>
        <ul>
          {getEventsForDate(selectedDate).length > 0 ? (
            getEventsForDate(selectedDate).map((event, index) => (
              <li key={index} className="event-item">
                <strong>{event.method}</strong>: {event.description}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteEvent(index)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="no-events">No events for this date.</li>
          )}
        </ul>
      </div>

      {showAddEvent ? (
        <div className="add-event-form">
          <h3>Add Event</h3>
          <label>
            Method:
            <input
              type="text"
              value={newEvent.method}
              onChange={(e) => setNewEvent({ ...newEvent, method: e.target.value })}
              placeholder="e.g., Email, LinkedIn Post"
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              placeholder="e.g., Follow-up call"
            />
          </label>
          <button onClick={handleAddEvent} className="add-button">
            Add Event
          </button>
          <button onClick={() => setShowAddEvent(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={() => setShowAddEvent(true)} className="add-event-button">
          Add Event
        </button>
      )}
    </div>
  );
};

export default CalendarPage;
