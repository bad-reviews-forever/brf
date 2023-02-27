const chevron = document.querySelector('.chevron');
const slabContainer = document.querySelector('.slab-container');
const slabExpand = document.querySelector('.slab-expand');

// Function to toggle the slab expand state
function toggleSlabExpand() {
  slab.classList.toggle('expanded');
  slabExpand.classList.toggle('hidden');
}

// Add click event listener to chevron
chevron.addEventListener('click', toggleSlabExpand);