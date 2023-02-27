// Remove orphaned canvas
document.querySelectorAll(':root canvas').forEach(canvas => canvas.remove());

// define our constants
const badReviews = JSON.parse(localStorage.getItem('badReviews')) || [];
const cFSwitcher = document.querySelector('.c-f-switcher');
const formContainer = cFSwitcher.querySelector('.form-container');
const chartContainer = cFSwitcher.querySelector('.chart-container');
const slab = cFSwitcher.querySelector('.slab');
const form = formContainer.querySelector('.form')
const complaintList = slab.querySelector('.complaint-list');
const complaintTemplate = slab.querySelector('.complaint-template');

// Render the complaint list
function renderComplaints() {
  complaintList.innerHTML = '';

  if (badReviews.length === 0) {
    const fillerComplaintItem = complaintTemplate.content.cloneNode(true);
    complaintList.appendChild(fillerComplaintItem);
  } else {
    badReviews.forEach((complaint) => {
      const complaintItem = document.createElement('div');
      complaintItem.classList.add('complaint-item');

      const figure = document.createElement('figure');
      figure.classList.add('complaint-image');
      const image = document.createElement('img');
      image.src = '/images/angry.png'; // set the image file URL here
      figure.appendChild(image);
      complaintItem.appendChild(figure);

      const aside = document.createElement('aside');
      aside.classList.add('complaint-text');

      const item1 = document.createElement('figcaption');
      item1.classList.add('complaint-text-figcaption');
      item1.insertAdjacentHTML('beforeend', `<h4>${complaint.name}</h4>, the Unhappy Customer of ${complaint.location} was wronged by <h4>${complaint.target}</H4>, faithless ${complaint.occupation}.`);
      aside.appendChild(item1);

      const item2 = document.createElement('figcaption');
      item2.classList.add('complaint-text-figcaption');
      item2.insertAdjacentHTML('beforeend', `${complaint.complaint}`);
      aside.appendChild(item2);

      const item3 = document.createElement('figcaption');
      item3.classList.add('complaint-text-figcaption');
      item3.insertAdjacentHTML('beforeend', `<h4>May this misdeed be remembered FOREVER</h4>`);
      aside.appendChild(item3);
      complaintItem.appendChild(aside);
      complaintList.appendChild(complaintItem);
    });
  }
}

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
  renderComplaints();
}

// Load complaint data from local storage on page load
renderComplaints();