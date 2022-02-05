// Define Data
let data1 = [{
    x: countryRegion,
    y: jan2020,
    // mode: "lines",
    type: "scatter"
  }];
  
let layout = {
  width: 1200,
  height: 1200
}
  // Display using Plotly
  Plotly.newPlot("myPlot", data1, layout);
  

console.log(countryRegion[0])