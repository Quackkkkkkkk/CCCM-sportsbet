new Chart("chart1", {
    type: "pie",
    data: {
      labels: ["h", "i"],
      datasets: [{
        backgroundColor: ["red", "red"],
        data: [67, 33]
      }]
    },
    options: {
      title: {
        display: true
      }
    }
  });