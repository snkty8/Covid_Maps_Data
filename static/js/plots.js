// Define Data
// let data1 = [{
//     x: countryRegion,
//     y: jan2021,
//     type: "bar"
//   }];
  
// let layout = {
//   width: 2500,
//   height: 500
// }
//   // Display using Plotly
//   Plotly.newPlot("myPlot", data1, layout);


let data1 = [{
  // Afghanistan
  x: ['Jan2020', 'Feb2020', 'March2020', 'April2020', 'May2020', 'June2020', 'July2020', 'August2020', 'Sept2020', 'Oct2020', 'Nov2020', 'Dec2020', 'Jan2021', 'Feb2021', 'March2021','April2021', 'May2021','June2021', 'July2021', 'Aug2021', 'Sept2021', 'Oct2021'],
  y: [jan2020[0], feb2020[0], march2020[0], april2020[0], may2020[0], june2020[0], july2020[0], aug2020[0], sep2020[0], oct2020[0], nov2020[0], dec2020[0],jan2021[0], feb2021[0], march2021[0], april2021[0], may2021[0], june2021[0], july2021[0], aug2021[0], sep2021[0], oct2021[0]],
  type: "bar"
}];

let layout = {
// width: 2500,
// height: 500
}
// Display using Plotly
Plotly.newPlot("myPlot", data1, layout);

