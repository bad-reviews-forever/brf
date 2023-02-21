let form = document.querySelector('.form');
const slab = document.querySelector('.slab');
const complaintList = slab.querySelector('.complaint-list');
const complaintTemplate = document.querySelector('.complaint-template');

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

// Save complaint data to local storage
function saveBadReviews() {
  localStorage.setItem('badReviews', JSON.stringify(badReviews));
}

// Load complaint data from local storage
function loadBadReviews() {
  const badReviewsJSON = localStorage.getItem('badReviews');

  if (badReviewsJSON !== null) {
    badReviews = JSON.parse(badReviewsJSON);
  }

  renderComplaints();
}

loadBadReviews();

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

  badReviews.push(newComplaint);

  renderComplaints();
  saveBadReviews();

  // Reset form fields
  form.reset();

  // Scroll to top of slab after adding new complaint
  slab.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  // Replace the form with the chart
  const chartContainer = document.createElement('div');
  chartContainer.classList.add('chart-container');
  const canvas = document.createElement('canvas');
  canvas.classList.add('chart');
  chartContainer.appendChild(canvas);
  slab.replaceChild(chartContainer, form);
}
form.addEventListener('submit', formSubmit);
