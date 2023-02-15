/* Get the elements needed for the animation */
const slab = document.querySelector('.slab');
const complaintList = document.querySelector('.slab ul');

/* Define the height of each new review */
const reviewHeight = 40;

/* Define the maximum number of reviews to display at once */
const maxReviews = 15;

/* Define the starting height of the slab */
let slabHeight = 100;

/* Add event listener for form submission */
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  /* Get the form data and create a new list item with it */
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const location = formData.get('location');
  const complaint = formData.get('complaint');
  const target = formData.get('target');
  const occupation = formData.get('occupation');
  const email = formData.get('email');
  const review = document.createElement('li');
  review.textContent = `${name}, ${location}: ${complaint} (about ${target}, a ${occupation}).`;

  /* Add the new review to the list and update the chart */
  complaintList.prepend(review);
  loadComplaintData();

  /* Calculate the new height of the slab */
  const numReviews = complaintList.children.length;
  const newHeight = numReviews * reviewHeight + 100;
  slabHeight = newHeight > maxReviews * reviewHeight + 100 ? maxReviews * reviewHeight + 100 : newHeight;

  /* Animate the slab */
  slab.style.transition = 'height 0.5s';
  slab.style.height = `${slabHeight}vh`;
});

/* Add event listener for expanding the slab */
document.querySelector('.slab .chevron').addEventListener('click', () => {
  const currentHeight = slab.offsetHeight;
  const newHeight = currentHeight + 100;
  slabHeight = newHeight > maxReviews * reviewHeight + 100 ? maxReviews * reviewHeight + 100 : newHeight;
  slab.style.height = `${slabHeight}vh`;
});