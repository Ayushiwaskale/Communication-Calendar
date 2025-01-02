// src/components/Charts/EngagementEffectivenessChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EngagementEffectivenessChart = ({ data }) => {
  // Handle missing or incomplete data
  if (!data || !data.labels || !data.values) {
    return <p>Loading chart data...</p>;  // Fallback UI if data is missing
  }

  const chartData = {
    labels: data.labels,  // e.g., ['Email', 'Phone Call', 'LinkedIn']
    datasets: [
      {
        label: 'Engagement Effectiveness',
        data: data.values,  // e.g., [50, 30, 15]
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Engagement Effectiveness',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default EngagementEffectivenessChart;
