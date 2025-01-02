import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register required chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const OverdueTrendsChart = ({ data }) => {
  // Check if data and data.dates are defined
  if (!data || !data.dates || !data.values) {
    return <p>Loading data...</p>;  // Fallback UI if data is missing
  }

  const chartData = {
    labels: data.dates,  // Ensure this property exists in the data
    datasets: [
      {
        label: 'Overdue Trends',
        data: data.values,  // Ensure this property exists in the data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Overdue Trends',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default OverdueTrendsChart;
