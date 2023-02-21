// Remove orphaned canvas
document.querySelectorAll(':root canvas').forEach(canvas => canvas.remove());

// Get complaint data from local storage
let badReviews = JSON.parse(localStorage.getItem('badReviews')) || [];

// Add complaint to local storage and update chart
function addComplaint(complaint) {
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

  // Update chart
  loadbadReviews(badReviews);
}

// Load complaint data from local storage on page load
loadbadReviews(badReviews);

function loadbadReviews(badReviews) {
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
  
    // Reset form
    event.target.reset();
  });