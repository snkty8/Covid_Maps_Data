// Show names of countries in dropdown 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// Function that makes rows to colums.  Easier to grab the Covid month ticks
function transpose(a) {
  return Object.keys(a[0]).map(function(c) {
      return a.map(function(r) { return r[c]; });
  });
}

let monthValueColumns = [
  jan2020,
  feb2020,
  march2020,
  april2020,
  may2020, 
  jan2020, 
  july2020, 
  aug2020, 
  sep2020,
  oct2020, 
  nov2020, 
  dec2020, 
  jan2021, 
  feb2021, 
  march2021, 
  april2021, 
  may2021, 
  june2021, 
  july2021, 
  aug2021, 
  sep2021, 
  oct2021]

  const transposedMonthValueCoulmns = transpose(monthValueColumns)
  const Afghanistan1 = transposedMonthValueCoulmns[0]
  const Albania = transposedMonthValueCoulmns[1]
  const Algeria = transposedMonthValueCoulmns[2]
  const Andorra = transposedMonthValueCoulmns[3]
  const Angola = transposedMonthValueCoulmns[4]
  const AntiguaandBarbuda = transposedMonthValueCoulmns[5]
  const Argentina = transposedMonthValueCoulmns[6]
  const Armenia = transposedMonthValueCoulmns[7]
  
  const Australia = transposedMonthValueCoulmns[8]
  const Australia2 = transposedMonthValueCoulmns[9]
  const Australia3 = transposedMonthValueCoulmns[10]
  const Australia4 = transposedMonthValueCoulmns[11]
  const Australia5 = transposedMonthValueCoulmns[12]
  const Australia6 = transposedMonthValueCoulmns[13]
  const Australia7 = transposedMonthValueCoulmns[14]
  const Australia8 = transposedMonthValueCoulmns[15]
  
  const Austria = transposedMonthValueCoulmns[16]
  const Azerbaijan = transposedMonthValueCoulmns[17]
  const Bahamas = transposedMonthValueCoulmns[18]
  const Bahrain = transposedMonthValueCoulmns[19]
  const Bangladesh = transposedMonthValueCoulmns [20]
  const Barbados = transposedMonthValueCoulmns[21]
  const Belarus = transposedMonthValueCoulmns[22]
  
  


// Plots functuion
function getPlot(country) {
  let data1 = [{
    // Afghanistan
    x: ['Jan2020', 'Feb2020', 'March2020', 'April2020', 'May2020', 'June2020', 'July2020', 'August2020', 'Sept2020', 'Oct2020', 'Nov2020', 'Dec2020', 'Jan2021', 'Feb2021', 'March2021','April2021', 'May2021','June2021', 'July2021', 'Aug2021', 'Sept2021', 'Oct2021'],
    y: country,
    type: "bar"
  }];
  
  let layout = {
  // width: 2500,
  // height: 500
  }
  // Display using Plotly
  Plotly.newPlot("myPlot", data1, layout);
}  






