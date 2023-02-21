// Define the height of each new review
const REVIEW_HEIGHT = 40;

// Define the maximum number of reviews to display at once
const MAX_REVIEWS = 15;

// Function to load bad reviews
function loadbadReviews() {
  const reviews = document.querySelectorAll('.slab div');
  for (let review of reviews) {
    const text = review.textContent.toLowerCase();
    if (text.includes('bad') || text.includes('terrible') || text.includes('horrible')) {
      review.classList.add('bad-review');
    }
  }
}

// Function to initialize the slab
function initSlab() {
  loadbadReviews();
  const numReviews = document.querySelector('.slab').children.length;
  const newHeight = numReviews * REVIEW_HEIGHT + 100;
  let slabHeight = newHeight > MAX_REVIEWS * REVIEW_HEIGHT + 100 ? MAX_REVIEWS * REVIEW_HEIGHT + 100 : newHeight;
  document.querySelector('.slab').style.height = `${slabHeight}vh`;
  
  // Check for the existence of the chevron element before adding the event listener
  const chevron = document.querySelector('.slab .chevron');
  if (chevron) {
    chevron.addEventListener('click', () => {
      const currentHeight = document.querySelector('.slab').offsetHeight;
      const newHeight = currentHeight + 100;
      let slabHeight = newHeight > MAX_REVIEWS * REVIEW_HEIGHT + 100 ? MAX_REVIEWS * REVIEW_HEIGHT + 100 : newHeight;
      document.querySelector('.slab').style.height = `${slabHeight}vh`;
    });
  }
}