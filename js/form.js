// Save complaint data to local storage
function saveBadReviews() {
  localStorage.setItem("badReviews", JSON.stringify(badReviews));
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

  badReviews.push(newComplaint);

  renderComplaints();
  saveBadReviews();

  // Reset form fields
  form.reset();

  // Create chart container and canvas
  const chartDiv = document.createElement("div");
  chartDiv.classList.add("chart-container");
  const chartCanvas = document.createElement("canvas");
  chartDiv.appendChild(chartCanvas);
  chartCanvas.classList.add("chart");

  // Move slab to slab-expand
  const slabExpand = document.querySelector(".slab-expand");
  slabExpand.appendChild(slab);

  // Remove slab-container
  const slabContainer = document.querySelector(".slab-container");
  slabContainer.remove();

  // Add chart to c-f-switcher
  const cFSwitcher = document.querySelector(".c-f-switcher");
  cFSwitcher.insertBefore(chartDiv, slabExpand);

  // Draw chart
  drawChart();
}
