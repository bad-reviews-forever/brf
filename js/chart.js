// Define function to draw chart
function drawChart() {
  // Create chart
  const ctx = document.querySelector(".chart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
      datasets: [
        {
          label: "Project Timeline",
          data: [null, null, null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          borderColor: "blue",
          backgroundColor: "rgba(0, 0, 255, 0.2)",
          fill: "origin",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Project Timeline",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0,
        },
      },
      annotation: {
        annotations: [
          {
            type: "box",
            xScaleID: "x-axis-0",
            yScaleID: "y-axis-0",
            xMin: "Q4",
            xMax: "Q5",
            backgroundColor: "rgba(0, 255, 0, 0.2)",
          },
          {
            type: "box",
            xScaleID: "x-axis-0",
            yScaleID: "y-axis-0",
            xMin: "Q6",
            xMax: "Q7",
            backgroundColor: "rgba(255, 255, 0, 0.2)",
          },
          {
            type: "box",
            xScaleID: "x-axis-0",
            yScaleID: "y-axis-0",
            xMin: "Q8",
            xMax: "Q8",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          },
        ],
      },
    },
  });
}

// Load complaint data from local storage on page load
renderComplaints()
