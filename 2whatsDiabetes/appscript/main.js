const labelYear= [21998, 2004, 2010];

const dataObj = {
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
            backgroundColor: "hsla(60,23%,91%, 0.7)",
            borderColor: "rgb(238,238,228)"
        }
    ]
};
new Chart("diabetesTrend",
            {
                type: "bar",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ["Diabetes trend"],
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: "rgb(238,238,228)"
                    },
                    
                    gridLines:{
                        display:true,
                        color: "rgb(238,238,228)"
                    }
                }
            });