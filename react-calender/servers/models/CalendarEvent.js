const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
});

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);