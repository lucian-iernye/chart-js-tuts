//setup
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 8],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

//config
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true, // display or hide the legend
        position: "top", // position of the legend - top is default
        labels: {
          color: "green", // the color of the top legend
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

const table = document.getElementById("table-data");

for (i = 0; i < labels.length; i++) {
  const tr = document.createElement("tr");

  const labelCol = document.createElement("td");
  labelCol.innerText = labels[i];
  tr.appendChild(labelCol);

  const dataCol = document.createElement("td");
  dataCol.innerText = data.datasets[0].data[i];
  tr.appendChild(dataCol);
  table.appendChild(tr);
}
