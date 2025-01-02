import React, { useEffect, useState } from "react";
import axios from "axios";
import CommunicationFrequencyChart from "../components/Charts/CommunicationFrequencyChart";
import EngagementEffectivenessChart from "../components/Charts/EngagementEffectivenessChart";
import OverdueTrendsChart from "../components/Charts/OverdueTrendsChart";
import './DashboardPage.css';

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({
    companies: [],
    effectivenessData: { labels: ['Jan', 'Feb', 'Mar', 'Apr'], values: [60, 75, 80, 90] },
    overdueData: { dates: ['2023-12-28', '2023-12-29', '2023-12-30'], overdueCounts: [2, 3, 1] },
  });

  const [today] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    // Mock data fetch for example purposes
    const fetchData = async () => {
      try {
        // Uncomment to fetch from API
        // const response = await axios.get("http://localhost:5000/api/dashboard");
        const mockResponse = {
          companies: [
            {
              id: 1,
              name: "Tech Innovations",
              lastCommunications: [
                { type: "Email", date: "2023-12-25" },
                { type: "Phone Call", date: "2023-12-20" },
              ],
              nextCommunication: { type: "Meeting", date: "2024-01-05" },
              notes: "Potential AI project collaboration.",
            },
          ],
          effectivenessData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr'],
            values: [60, 75, 80, 90],
          },
          overdueData: {
            dates: ['2023-12-28', '2023-12-29', '2023-12-30'],
            overdueCounts: [2, 3, 1],
          },
        };
        setDashboardData(mockResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getHighlightClass = (date) => {
    const dueDate = new Date(date);
    const currentDate = new Date(today);

    if (dueDate < currentDate) return "highlight-red";
    if (dueDate.toDateString() === currentDate.toDateString()) return "highlight-yellow";
    return "";
  };

  const logCommunication = (companyId) => {
    const updatedCompanies = dashboardData.companies.map((company) =>
      company.id === companyId
        ? {
            ...company,
            lastCommunications: [
              ...company.lastCommunications,
              { type: "Phone Call", date: today },
            ].slice(-5),
            nextCommunication: { type: "Email", date: "2024-01-10" },
          }
        : company
    );
    setDashboardData((prevState) => ({
      ...prevState,
      companies: updatedCompanies,
    }));
  };

  const communicationData = {
    labels: ["Email", "Phone Call", "Meeting"],
    values: [10, 5, 2], // Example data
  };

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      {/* Communication Frequency Chart */}
      <div className="dashboard-box">
        <h2>Communication Frequency</h2>
        <CommunicationFrequencyChart data={communicationData} type="line" />
      </div>

      {/* Engagement Effectiveness Chart */}
      <div className="dashboard-box">
        <h2>Engagement Effectiveness</h2>
        <EngagementEffectivenessChart data={dashboardData.effectivenessData} type="line" />
      </div>

      {/* Overdue Trends Chart */}
      <div className="dashboard-box">
        <h2>Overdue Trends</h2>
        <OverdueTrendsChart data={dashboardData.overdueData} />
      </div>

      {/* Companies Table */}
      <div className="dashboard-box">
        <h2>Companies</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Last Five Communications</th>
              <th>Next Scheduled Communication</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.companies.map((company) => (
              <tr
                key={company.id}
                className={getHighlightClass(company.nextCommunication.date)}
              >
                <td>{company.name}</td>
                <td>
                  {company.lastCommunications.map((comm, index) => (
                    <div key={index} className="tooltip">
                      {comm.type} - {comm.date}
                      <span className="tooltip-text">{company.notes}</span>
                    </div>
                  ))}
                </td>
                <td>
                  {company.nextCommunication.type} - {company.nextCommunication.date}
                </td>
                <td>
                  <button onClick={() => logCommunication(company.id)}>
                    Communication Performed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
