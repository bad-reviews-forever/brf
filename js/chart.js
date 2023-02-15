// Chart.js
'use strict';

// Get complaint data from local storage
let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

// Create chart
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: complaints.map(complaint => complaint.timestamp),
    datasets: [{
      label: 'Number of Complaints',
      data: complaints.map((complaint, i) => ({x: i, y: complaint.count})),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: complaints.length - 1
        }
      }]
    }
  }
});

// Update chart with new complaint data
function updateChart() {
  // Get complaint data from local storage
  complaints = JSON.parse(localStorage.getItem('complaints')) || [];

  // Update chart data
  chart.data.labels = complaints.map(complaint => complaint.timestamp);
  chart.data.datasets[0].data = complaints.map((complaint, i) => ({x: i, y: complaint.count}));
  chart.options.scales.xAxes[0].ticks.max = complaints.length - 1;

  // Redraw chart
  chart.update();
}

// Add complaint to local storage and update chart
function addComplaint(complaint) {
  // Get complaint data from local storage
  complaints = JSON.parse(localStorage.getItem('complaints')) || [];

  // Find existing complaint
  const existingComplaint = complaints.find(c => c.timestamp === complaint.timestamp);

  // Add or update complaint
  if (existingComplaint) {
    existingComplaint.count++;
  } else {
    complaints.push({...complaint, count: 1});
  }

  // Save complaint data to local storage
  localStorage.setItem('complaints', JSON.stringify(complaints));

  // Update chart
  updateChart();
}

// Load complaint data from local storage on page load
window.addEventListener('load', () => {
  loadComplaintData();
});

// This script handles chart rendering and updating, using complaint data from local storage.
// It also handles adding new complaints to the chart, by adding them to local storage and then updating the chart with the new data.
// Finally, it handles loading the complaint data from local storage on page load.
