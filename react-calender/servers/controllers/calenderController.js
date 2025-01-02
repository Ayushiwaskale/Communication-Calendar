const CalendarEvent = require('../models/CalendarEvent');

const getEvents = async (req, res) => {
    try {
        const events = await CalendarEvent.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createEvent = async (req, res) => {
    try {
        const event = new CalendarEvent(req.body); // Corrected line
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getEvents, createEvent };