const mongoose = require('mongoose');

const dashboardDataSchema = new mongoose.Schema({
    widget: { type: String, required: true },
    data: { type: Object, required: true },
});

module.exports = mongoose.model('DashboardData', dashboardDataSchema);