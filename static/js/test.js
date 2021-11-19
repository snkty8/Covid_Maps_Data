var json = require('/Users/snkty/OneDrive/Desktop/Respositories/Covid_Maps_Data/Resources/sum_counts_per_months.json'); //(with path)
console.log(json[277]['Country/Region'])


var countryRegion = json.forEach(function(obj) { console.log(obj['Country/Region']); });
var Latitude = json.forEach(function(obj) { console.log(obj['Latitude']); });
console.log(countryRegion)