const express = require('express');
const { getDashboardData, createDashboardData } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/dashboard', getDashboardData);
router.post('/dashboard', createDashboardData);

module.exports = router;