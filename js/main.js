/* main.js */
// Import or link to other necessary .js files here

// Global variables
let chartData = []; // array of objects with {x, y} values for the chart
let localStorageKey = "badReviewsData"; // key for local storage
let chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      type: "time",
      time: {
        unit: "day"
      },
      scaleLabel: {
        display: true,
        labelString: "Date"
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Number of Bad Reviews"
      },
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// Check local storage for existing data and initialize chartData
if (localStorage.getItem(localStorageKey)) {
  chartData = JSON.parse(localStorage.getItem(localStorageKey));
} else {
  // Add template data for Nanni's complaint
  chartData.push({x: "2021-01-01", y: 1});
  chartData.push({x: "2021-02-01", y: 3});
  chartData.push({x: "2021-03-01", y: 2});
  chartData.push({x: "2021-04-01", y: 5});
}
// Main function for chart.js rendering
function renderChart() {
  var chartCanvas = document.getElementById('bad-reviews-chart').getContext('2d');
  var chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Bad Reviews',
      data: [12, 19, 3, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };
  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  var myChart = new Chart(chartCanvas, {
    type: 'line',
    data: chartData,
    options: chartOptions
  });
}

// Main function for form.js
function handleFormSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData(form);
  var badReview = {
    name: formData.get('name'),
    location: formData.get('location'),
    complaint: formData.get('complaint'),
    target: formData.get('target'),
    occupation: formData.get('occupation'),
    email: formData.get('email'),
    contact: formData.get('contact') === 'contact'
  };
  var badReviews = getBadReviews();
  badReviews.push(badReview);
  setBadReviews(badReviews);
  form.reset();
  animateSlab();
}

// Main function for slab.js
function getBadReviews() {
  var badReviews = localStorage.getItem('badReviews');
  if (badReviews) {
    return JSON.parse(badReviews);
  } else {
    var nannisComplaint = {
      name: 'Nanni',
      location: 'Uruk',
      complaint: 'I have received your copper tablet, but as for the field, which you ordered me to plow, I had no team available.',
      target: 'Ea-nasir',
      occupation: 'Merchant',
      email: '',
      contact: false
    };
    return [nannisComplaint];
  }
}

function setBadReviews(badReviews) {
  localStorage.setItem('badReviews', JSON.stringify(badReviews));
}

// Check if localStorage is supported
if (typeof(Storage) !== 'undefined') {
  // Add event listener to form
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
} else {
  console.error('Local storage is not supported in your browser');
}

// Main function for global logic
function main() {
  renderChart();
}

// Call main function when DOM is loaded
document.addEventListener('DOMContentLoaded', main);