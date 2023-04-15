const labelYear= [1998, 2004, 2010];

//data for crude rate of diabetes 
const data = {
    labels: labelYear,           
    datasets: [
        {
            label: "Male",
            data: [8.5, 8.9, 12.3],
            borderWidth: 2,
            backgroundColor: "hsla(60,23%,91%, 0.7)",
            borderColor: "rgb(238,238,228)"
        },
        {
            label: "Female",
            data: [9.6, 7.6, 10.4],
            borderWidth: 2,
            backgroundColor: "#eee4e9",
            borderColor: "rgb(238,238,228)"
        }
    ]
};
//configuring the first graph 
const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
      },
       title: {
            display: true,
            text: ["Crude Rate of Diabetes in Singapore Over The Years"],
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: "rgb(238,238,228)"
        },
    }
  };
//rendering 
  const diabetesTrend = new Chart(
    document.getElementById('diabetesTrend'),
    config
  );
//creating an update funciton so viewer can change graph type. the type is replaced in the configuration
function chartType(type){
   diabetesTrend.config.type = type
   diabetesTrend.update();
}

//data for pie chart
const data2 = {
    labels: [
    'Type I',
      'Type II',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [90,10],
      backgroundColor: [

        "#eab676",
        "#76eab6",
      ],
      hoverOffset: 4
    }],
  };

  const config2 = {
    type: 'doughnut',
    data: data2,
    options:{
    title: {
        display: true,
        text: ["But what is the most prevalent type of diabetes?"],
        fontFamily: "TrebuchetMS",
        fontSize: 24,
        fontColor: "rgb(238,238,228)"
    },
}
  };
//rendering pie chart
  const diabetesTrend2 = new Chart(
    document.getElementById('diabetesTrend2'),
    config2
  );