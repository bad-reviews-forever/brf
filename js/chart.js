// Remove orphaned canvas
document.querySelectorAll(':root canvas').forEach(canvas => canvas.remove());

// // Get complaint data from local storage
// let badReviews = JSON.parse(localStorage.getItem('badReviews')) || [];

// Create chart
const ctx = document.querySelector('.chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: badReviews.map(complaint => complaint.timestamp),
    datasets: [{
      label: 'Number of Complaints',
      data: badReviews.map((complaint, i) => ({x: i, y: complaint.count})),
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
          max: badReviews.length - 1
        }
      }]
    }
  }
});

// Add complaint to local storage and update chart
function addComplaint(complaint) {
  // Get complaint data from local storage
  JSON.parse(localStorage.getItem('badReviews')) || [];

  // Find existing complaint
  const existingComplaint = badReviews.find(c => c.timestamp === complaint.timestamp);

  // Add or update complaint
  if (existingComplaint) {
    existingComplaint.count++;
  } else {
    badReviews.push({...complaint, count: 1});
  }

  // Save complaint data to local storage
  localStorage.setItem('badReviews', JSON.stringify(badReviews));
}

// Load complaint data from local storage on page load
loadbadReviews();

function loadbadReviews() {
  // Get complaint data from local storage
  JSON.parse(localStorage.getItem('badReviews')) || [];

  // Update chart data
  chart.data.labels = badReviews.map(complaint => complaint.timestamp);
  chart.data.datasets[0].data = badReviews.map((complaint, i) => ({x: i, y: complaint.count}));
  chart.options.scales.xAxes[0].ticks.max = badReviews.length - 1;

  // Redraw chart
  chart.update();
}

// Listen for form submit event
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  // Get form data
  const name = event.target.elements.name.value;
  const complaint = event.target.elements.complaint.value;

  // Add complaint to local storage and update chart
  addComplaint({name, complaint, timestamp: new Date().toISOString()});
  loadbadReviews();

  // Reset form
  event.target.reset();
});