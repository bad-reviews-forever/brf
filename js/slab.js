// Define the height of each new review
const REVIEW_HEIGHT = 40;

// Define the maximum number of reviews to display at once
const MAX_REVIEWS = 15;

// Add event listener for form submission 
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form data and create a new list item with it
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const location = formData.get('location');
  const complaint = formData.get('complaint');
  const target = formData.get('target');
  const occupation = formData.get('occupation');
  const email = formData.get('email');
  const review = document.createElement('li');
  review.textContent = `${name}, ${location}: ${complaint} (about ${target}, a ${occupation}).`;

  // Add the new review to the list and update the chart
  document.querySelector('.slab ul').prepend(review);
  loadbadReviews();

  // Calculate the new height of the slab
  const numReviews = document.querySelector('.slab ul').children.length;
  const newHeight = numReviews * REVIEW_HEIGHT + 100;
  let slabHeight = newHeight > MAX_REVIEWS * REVIEW_HEIGHT + 100 ? MAX_REVIEWS * REVIEW_HEIGHT + 100 : newHeight;

  // Animate the slab
  document.querySelector('.slab').style.transition = 'height 0.5s';
  document.querySelector('.slab').style.height = `${slabHeight}vh`;
});

// Add event listener for expanding the slab
document.querySelector('.slab .chevron').addEventListener('click', () => {
  const currentHeight = document.querySelector('.slab').offsetHeight;
  const newHeight = currentHeight + 100;
  let slabHeight = newHeight > MAX_REVIEWS * REVIEW_HEIGHT + 100 ? MAX_REVIEWS * REVIEW_HEIGHT + 100 : newHeight;
  document.querySelector('.slab').style.height = `${slabHeight}vh`;
});