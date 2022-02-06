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

function getMonths(arr1, arr2) {
  arry = []
  for (let i = 0; i < arry.length; i++) {
    arry[i] = [jan2020[i], feb2020[i]]
  }
  console.log(arry);  
}

let newTop = getMonths(jan2020, feb2020)
console.log(newTop)