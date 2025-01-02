const mongoose = require('mongoose');

const analyticsDataSchema = new mongoose.Schema({
    metric: { type: String, required: true },
    value: { type: Number, required: true },
});

module.exports = mongoose.model('AnalyticsData', analyticsDataSchema);