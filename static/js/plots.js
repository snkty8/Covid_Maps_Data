// Define Data
let data1 = [{
    x: countryRegion,
    y: jan2021,
    type: "bar"
  }];
  
let layout = {
  width: 2500,
  height: 500
}
  // Display using Plotly
  Plotly.newPlot("myPlot", data1, layout);
 
console.log(countryRegion[45])
console.log(jan2021[45])