// Example: companyRoutes.js
const express = require('express');
const { getCompanies, createCompany } = require('../controllers/companyController');

const router = express.Router();

router.get('/companies', getCompanies);
router.post('/companies', createCompany);

module.exports = router;
