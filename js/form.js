let form = document.querySelector('form');
const slab = document.querySelector('.slab');
const complaintList = slab.querySelector('ul');
const complaintTemplate = complaintList.querySelector('li');

// let badReviews = [];

// Render the complaint list
function renderComplaints() {
  complaintList.innerHTML = '';

  badReviews.forEach((complaint) => {
    const complaintItem = complaintTemplate.cloneNode(true);
    complaintItem.textContent = `${complaint.name} from ${complaint.location} complained about ${complaint.target} being a ${complaint.occupation}.`;

    complaintList.appendChild(complaintItem);
  });
}

// Save complaint data to local storage
function savebadReviews() {
  localStorage.setItem('badReviews', JSON.stringify(badReviews));
}

// Load complaint data from local storage
function loadbadReviews() {
  const badReviewsJSON = localStorage.getItem('badReviews');

  if (badReviewsJSON !== null) {
    badReviews = JSON.parse(badReviewsJSON);
  }

  renderComplaints();
}

loadbadReviews();

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
  savebadReviews();

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