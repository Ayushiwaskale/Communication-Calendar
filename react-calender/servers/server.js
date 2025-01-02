const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const companyRoutes = require('./routes/companyRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const cors = require('cors'); // Import CORS

dotenv.config();

const app = express();
connectDB(); // Connect to the database

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api/companies', companyRoutes);  // Route for companies
app.use('/api/calendar', calendarRoutes);  // Route for calendar
app.use('/api/analytics', analyticsRoutes); // Route for analytics
app.use('/api/dashboard', dashboardRoutes); // Route for dashboard

// Set up the server to listen on the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
