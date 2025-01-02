const express = require('express');
const { getAnalytics, createAnalytics } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/analytics', getAnalytics);
router.post('/analytics', createAnalytics);

module.exports = router;