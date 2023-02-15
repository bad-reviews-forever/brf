/* global Chart */
/* exported formSubmit */

const form = document.querySelector('form');
const slab = document.querySelector('.slab');
const complaintList = slab.querySelector('ul');
const complaintTemplate = complaintList.querySelector('li');

let complaintData = [];

// Render the complaint chart
function renderChart() {
  const data = {
    labels: complaintData.map((complaint, index) => `Complaint ${index + 1}`),
    datasets: [{
      label: 'Bad Reviews Over Time',
      data: complaintData.map((complaint) => complaint.time),
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

  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
}

// Render the complaint list
function renderComplaints() {
  complaintList.innerHTML = '';

  complaintData.forEach((complaint) => {
    const complaintItem = complaintTemplate.cloneNode(true);
    complaintItem.textContent = `${complaint.name} from ${complaint.location} complained about ${complaint.target} being a ${complaint.occupation}.`;

    complaintList.appendChild(complaintItem);
  });
}

// Save complaint data to local storage
function saveComplaintData() {
  localStorage.setItem('complaintData', JSON.stringify(complaintData));
}

// Load complaint data from local storage
function loadComplaintData() {
  const complaintDataJSON = localStorage.getItem('complaintData');

  if (complaintDataJSON !== null) {
    complaintData = JSON.parse(complaintDataJSON);
  }

  renderChart();
  renderComplaints();
}

// Form submit event handler
function formSubmit(event) {
  event.preventDefault();

  const name = form.elements.name.value.trim();
  const location = form.elements.location.value.trim();
  const complaint = form.elements.complaint.value.trim();
  const target = form.elements.target.value.trim();
  const occupation = form.elements.occupation.value.trim();
  const email = form.elements.email.value.trim();
  const contact = form.elements.contact.checked;
  const time = Date.now();

  const newComplaint = {
    name: name,
    location: location,
    complaint: complaint,
    target: target,
    occupation: occupation,
    email: email,
    contact: contact,
    time: time,
  };

  complaintData.push(newComplaint);

  renderChart();
  renderComplaints();
  saveComplaintData();

  // Reset form fields
  form.reset();

  // Scroll to top of slab after adding new complaint
  slab.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

form.addEventListener('submit', formSubmit);

loadComplaintData();