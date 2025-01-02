const AnalyticsData = require('../models/AnalyticsData');

const getAnalytics = async (req, res) => {
    try {
        const analytics = await AnalyticsData.find();
        res.status(200).json(analytics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createAnalytics = async (req, res) => {
    try {
        const analyticsData = new AnalyticsData(req.body);
        await analyticsData.save();
        res.status(201).json(analyticsData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAnalytics, createAnalytics };