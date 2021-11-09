//setup 
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'First dataset',
      backgroundColor: ['rgb(255, 99, 132)', 'blue', 'rgb(255, 66, 100)', 'green'],
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
      borderWidth: 2,
    },
    {
        label: 'Second dataset',
        backgroundColor: ['rgb(255, 99, 132)', 'blue', 'rgb(255, 66, 100)', 'green'],
        borderColor: 'rgb(255, 99, 132)',
        data: [20, 0, 40, 20, 2, 15, 4],
        borderWidth: 2,
      }]
  };

  //config
  const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false // display or hide the legend
            }
        }
    },
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );