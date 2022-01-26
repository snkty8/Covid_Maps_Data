// Define Data
let data1 = [{
    x: countryRegion,
    y: jan2020,
    // mode: "lines",
    type: "bar"
  }];
  
  // Define Layout
//   var layout = {
//     xaxis: {range: [40, 160], title: "Square Meters"},
//     yaxis: {range: [5, 16], title: "Price in Millions"},
//     title: "House Prices vs Size"
//   };
  
  // Display using Plotly
  Plotly.newPlot("myPlot", data1);
  
  