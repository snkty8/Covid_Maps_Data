function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("../Resources/sum_counts_per_mounts.json").then((data) => {
      console.log(data);
      var countryNames = data.Country/Region;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();