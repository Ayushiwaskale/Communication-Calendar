import React from 'react';
import CommunicationFrequencyChart from '../components/Charts/CommunicationFrequencyChart';
import EngagementEffectivenessChart from '../components/Charts/EngagementEffectivenessChart';
import OverdueTrendsChart from '../components/Charts/OverdueTrendsChart';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <h1>Analytics and Insights</h1>

      {/* Communication Frequency Report */}
      <section>
        <h2>Communication Frequency Report</h2>
        <CommunicationFrequencyChart />
      </section>

      {/* Engagement Effectiveness Dashboard */}
      <section>
        <h2>Engagement Effectiveness</h2>
        <EngagementEffectivenessChart />
      </section>

      {/* Overdue Communication Trends */}
      <section>
        <h2>Overdue Communication Trends</h2>
        <OverdueTrendsChart />
      </section>

      {/* Downloadable Reports */}
      <section>
        <h2>Downloadable Reports</h2>
        <button className="export-button">Export as PDF</button>
        <button className="export-button">Export as CSV</button>
      </section>

      {/* Real-Time Activity Log */}
      <section>
        <h2>Real-Time Activity Log</h2>
        <div className="activity-log">
          <ul>
            <li>30th Dec: Sent email to Company A.</li>
            <li>29th Dec: Made a phone call to Company B.</li>
            <li>28th Dec: Posted LinkedIn update for Company C.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;

