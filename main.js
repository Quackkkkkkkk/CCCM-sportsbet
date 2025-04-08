const config = {
    type: 'pie',
    data: data,
  };

  const ct1 = document.getElementById('chart1');

  new Chart(ct1, {
    type: 'pie',
    data: {
      datasets: [{
        data: [33, 67],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });