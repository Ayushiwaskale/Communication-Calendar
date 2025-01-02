const express = require('express');
const { getEvents, createEvent } = require('../controllers/calendarController');

const router = express.Router();

router.get('/events', getEvents);
router.post('/events', createEvent);

module.exports = router;