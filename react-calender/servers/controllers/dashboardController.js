const DashboardData = require('../models/DashboardData');

const getDashboardData = async (req, res) => {
    try {
        const dashboardData = await DashboardData.find();
        res.status(200).json(dashboardData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createDashboardData = async (req, res) => {
    try {
        const dashboardEntry = new DashboardData(req.body);
        await dashboardEntry.save();
        res.status(201).json(dashboardEntry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getDashboardData, createDashboardData };