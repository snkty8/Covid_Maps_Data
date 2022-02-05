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
  x: ['Jan2020', 'Feb2020', 'March2020', 'April2020', 'May2020', 'June2020', 'July2020', 'August2020', 'Sept2020', 'Oct2020', 'Nov2020', 'Dec2020'],
  y: [jan2020[0], feb2020[0], march2020[0], april2020[0], may2020[0], june2020[0], july2020[0], aug2020[0], sep2020[0], oct2020[0], nov2020[0], dec2020[0]],
  type: "bar"
}];

let layout = {
// width: 2500,
// height: 500
}
// Display using Plotly
Plotly.newPlot("myPlot", data1, layout);
