const buildChart = (label) => {
  // check if the canvas exists before trying to build it, and if exists, remove it
  let tempCanvas = document.getElementsByTagName("canvas")[0];
  if (tempCanvas) {
    tempCanvas.remove();
  }

  //build the canvas and append it to the dom
  let canvas = document.createElement("canvas");
  let canvasDiv = document.querySelector(".canvas");
  canvasDiv.appendChild(canvas);

  //setup
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
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

  const myChart = new Chart(document.getElementsByTagName("canvas"), config);
  return myChart;
};

const buildChartBtn = document.getElementById("build-chart");
buildChartBtn.addEventListener("click", () => {
  buildChart("No of votes.");
});

//
//
//
const createTableBtn = document.getElementById("create-table");
const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const tableDiv = document.querySelector(".table-div");

createTableBtn.addEventListener("click", () => {
  const tempTable = document.getElementsByTagName("table")[0];
  if (tempTable) {
    tempTable.remove();
  }
  const table = document.createElement("table");
  tableDiv.appendChild(table);

  for (let i = 0; i < rows.value; i++) {
    let tr = document.createElement("tr");
    tr.innerText = "";
    tr.contentEditable = true;
    table.appendChild(tr);

    for (let j = 0; j < columns.value; j++) {
      let td = document.createElement("td");
      td.contentEditable = true;
      td.innerText = "";
      td.style.width = `100 / ${columns.value}%`;
      if (columns.value > 19) {
        td.style.minWidth = "130px";
      }
      tr.appendChild(td);
    }
  }
});

//table
// const table = document.getElementById("table-data");

// for (i = 0; i < labels.length; i++) {
//   const tr = document.createElement("tr");

//   const labelCol = document.createElement("td");
//   labelCol.innerText = labels[i];
//   tr.appendChild(labelCol);

//   const dataCol = document.createElement("td");
//   dataCol.innerText = data.datasets[0].data[i];
//   tr.appendChild(dataCol);
//   table.appendChild(tr);
// }
