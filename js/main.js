// Load complaint data from local storage on page load
const badReviews = JSON.parse(localStorage.getItem('badReviews')) || [];

// Define function to render chart
function renderChart() {
  const data = {
    labels: badReviews.map((complaint, index) => `Complaint ${index + 1}`),
    datasets: [{
      label: 'Bad Reviews Over Time',
      data: badReviews.map((complaint) => complaint.time),
      backgroundColor: '#0081A7',
      borderColor: '#00AfB9',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: '#0081A7',
      pointBorderColor: '#00AfB9',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0081A7',
      pointHoverBorderColor: '#00AfB9',
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  const chartElement = document.getElementById('chart');
  if (chartElement) {
    const chart = new Chart(chartElement, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}

// Define function to run on DOM load
function main() {
  // Render chart
  renderChart();

  // Render complaints
  renderComplaints();
}

// Call main function when DOM is loaded
document.addEventListener('DOMContentLoaded', main);