
function clicker(){
     document.getElementById("introduction").innerHTML="Type 2 diabetes is a condition that happens because of a problem in the way the body regulates and uses glucose which is a sugar our bodies use as fuel. It occurs when the pancreas does not produce enough insulin — a hormone that regulates the movement of sugar into the cells. And the cells respond poorly to insulin and take in less sugar."
}




const labelYear= [21998, 2004, 2010];
const values = [9,8.2,11.3];
    const averages = [];
    for(let i = 0; i < values.length; i++) {
        averages[i] = values.slice(0,i+1).reduce((a,b)=>a+b,0)/(i+1);
    }


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
            backgroundColor: "#eee4e9",
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
                        display: true
                    },
                    title: {
                        display: true,
                        text: ["Crude Rate of Diabetes in Singapore Over The Years"],
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

            const dataObj2 = {
                labels: labelYear,           
                datasets: [
                    {
                        label: "Average",
                        data: [9.05, 8.25, 11.35],
                        borderWidth: 2,
                        backgroundColor: "hsla(60,23%,91%, 0.7)",
                        borderColor: "rgb(238,238,228)"
                    },
                ]
            };
            new Chart("diabetesTrend2",
            
                        {
                            type: "line",
                            data: dataObj2,
                            options: { 
                                maintainAspectRatio: false,
                                legend: {
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: ["Crude Rate of Diabetes in Singapore Over The Years"],
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
            

                