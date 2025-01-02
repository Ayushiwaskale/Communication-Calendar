// src/components/Charts/CommunicationFrequencyChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyChart = ({ data }) => {
  console.log('Chart Data:', data);  // Log the data for debugging

  if (!data || !data.labels || !data.values) {
    return <p>Loading chart data...</p>;  // Fallback UI if data is missing
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Communication Frequency',
        data: data.values,
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
        text: 'Communication Frequency Report',
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

export default CommunicationFrequencyChart;
