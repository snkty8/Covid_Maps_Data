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
  const Belgium = transposedMonthValueCoulmns[23]
  const Belize = transposedMonthValueCoulmns[24]
  const Benin = transposedMonthValueCoulmns[25]
  const Bhutan = transposedMonthValueCoulmns[26]
  const Bolivia = transposedMonthValueCoulmns[27]
  const BosniaandHerzegovina = transposedMonthValueCoulmns[28]
  const Botswana = transposedMonthValueCoulmns[29]
  const Brazil = transposedMonthValueCoulmns[30]
  const Brunei = transposedMonthValueCoulmns[31]
  const Bulgaria = transposedMonthValueCoulmns[32]
  const BurkinaFaso = transposedMonthValueCoulmns[33]
  const Burma = transposedMonthValueCoulmns[34]
  const Burundi = transposedMonthValueCoulmns[35]
  const CaboVerde = transposedMonthValueCoulmns[36]
  const Cambodia = transposedMonthValueCoulmns[37]
  const Cameroon = transposedMonthValueCoulmns[38]

  const Canada = transposedMonthValueCoulmns[39]
  const Canada2 = transposedMonthValueCoulmns[40]
  const Canada3 = transposedMonthValueCoulmns[41]
  const Canada4 = transposedMonthValueCoulmns[42]
  const Canada5 = transposedMonthValueCoulmns[43]
  const Canada6 = transposedMonthValueCoulmns[44]
  const Canada7 = transposedMonthValueCoulmns[45]
  const Canada8 = transposedMonthValueCoulmns[46]
  const Canada9 = transposedMonthValueCoulmns[47]
  const Canada10 = transposedMonthValueCoulmns[48]
  const Canada11 = transposedMonthValueCoulmns[49]
  const Canada12 = transposedMonthValueCoulmns[50]
  const Canada13 = transposedMonthValueCoulmns[51]
  const Canada14 = transposedMonthValueCoulmns[52]
  const Canada15 = transposedMonthValueCoulmns[53]

  const CentralAfricanRepublic = transposedMonthValueCoulmns[54]
  const Chad = transposedMonthValueCoulmns[55]
  const Chile = transposedMonthValueCoulmns[56]

  const China = transposedMonthValueCoulmns[57]
  const China2 = transposedMonthValueCoulmns[58]
  const China3 = transposedMonthValueCoulmns[59]
  const China4 = transposedMonthValueCoulmns[60]
  const China5 = transposedMonthValueCoulmns[61]
  const China6 = transposedMonthValueCoulmns[62]
  const China7 = transposedMonthValueCoulmns[63]
  const China8 = transposedMonthValueCoulmns[64]
  const China9 = transposedMonthValueCoulmns[65]
  const China10 = transposedMonthValueCoulmns[66]
  const China11 = transposedMonthValueCoulmns[67]
  const China12 = transposedMonthValueCoulmns[68]
  const China13 = transposedMonthValueCoulmns[69]
  const China14 = transposedMonthValueCoulmns[70]
  const China15 = transposedMonthValueCoulmns[71]
  const China16 = transposedMonthValueCoulmns[72]
  const China17 = transposedMonthValueCoulmns[73]
  const China18 = transposedMonthValueCoulmns[74]
  const China19 = transposedMonthValueCoulmns[75]
  const China20 = transposedMonthValueCoulmns[76]
  const China21 = transposedMonthValueCoulmns[77]
  const China22 = transposedMonthValueCoulmns[78]
  const China23 = transposedMonthValueCoulmns[79]
  const China24 = transposedMonthValueCoulmns[80]
  const China25 = transposedMonthValueCoulmns[81]
  const China26 = transposedMonthValueCoulmns[82]
  const China27 = transposedMonthValueCoulmns[83]
  const China28 = transposedMonthValueCoulmns[84]
  const China29 = transposedMonthValueCoulmns[85]
  const China30 = transposedMonthValueCoulmns[86]
  const China31 = transposedMonthValueCoulmns[87]
  const China32 = transposedMonthValueCoulmns[88]
  const China33 = transposedMonthValueCoulmns[89]

  const Colombia = transposedMonthValueCoulmns[90]
  const Comoros = transposedMonthValueCoulmns[91]
  const CongoBrazzaville = transposedMonthValueCoulmns[92]
  const CongoKinshasa = transposedMonthValueCoulmns[93]
  const CostaRica = transposedMonthValueCoulmns[94]
  const CotedIvoire = transposedMonthValueCoulmns[95]
  const Croatia = transposedMonthValueCoulmns[96]
  const Cuba = transposedMonthValueCoulmns[97]
  const Cyprus = transposedMonthValueCoulmns[98]
  const Czechia = transposedMonthValueCoulmns[99]

  const Denmark = transposedMonthValueCoulmns[100]
  const Denmark2 = transposedMonthValueCoulmns[101]
  const Denmark3 = transposedMonthValueCoulmns[102]

  const DiamondPrincess = transposedMonthValueCoulmns[103]
  const Djibouti = transposedMonthValueCoulmns[104]
  const Dominica = transposedMonthValueCoulmns[105]
  const DominicanRepublic = transposedMonthValueCoulmns[106]
  const Ecuador = transposedMonthValueCoulmns[107]
  const Egypt = transposedMonthValueCoulmns[108]
  const ElSalvador = transposedMonthValueCoulmns[109]
  const EquatorialGuinea = transposedMonthValueCoulmns[110]
  const Eritrea = transposedMonthValueCoulmns[111]
  const Estonia = transposedMonthValueCoulmns[112]
  const Eswatini = transposedMonthValueCoulmns[113]
  const Ethiopia = transposedMonthValueCoulmns[114]
  const Fiji = transposedMonthValueCoulmns[115]
  const Finland = transposedMonthValueCoulmns[116]
  
  const France = transposedMonthValueCoulmns[117]
  const France2 = transposedMonthValueCoulmns[118]
  const France3 = transposedMonthValueCoulmns[119]
  const France4 = transposedMonthValueCoulmns[120]
  const France5 = transposedMonthValueCoulmns[121]
  const France6 = transposedMonthValueCoulmns[122]
  const France7 = transposedMonthValueCoulmns[123]
  const France8 = transposedMonthValueCoulmns[124]
  const France9 = transposedMonthValueCoulmns[125]
  const France10 = transposedMonthValueCoulmns[126]
  const France11 = transposedMonthValueCoulmns[127]
  const France12 = transposedMonthValueCoulmns[128]

  const Gabon = transposedMonthValueCoulmns[129]
  const Gambia = transposedMonthValueCoulmns[130]
  const Georgia = transposedMonthValueCoulmns[131]
  const Germany = transposedMonthValueCoulmns[132]
  const Ghana = transposedMonthValueCoulmns[133]
  const Greece = transposedMonthValueCoulmns[134]
  const Grenada = transposedMonthValueCoulmns[135]
  const Guatemala = transposedMonthValueCoulmns[136]
  const Guinea = transposedMonthValueCoulmns[137]
  const GuineaBissau = transposedMonthValueCoulmns[138]
  const Guyana = transposedMonthValueCoulmns[139]
  const Haiti = transposedMonthValueCoulmns[140]
  const HolySee = transposedMonthValueCoulmns[141]
  const Honduras = transposedMonthValueCoulmns[142]
  const Hungary = transposedMonthValueCoulmns[143]
  const Iceland = transposedMonthValueCoulmns[144]
  const India = transposedMonthValueCoulmns[145]
  const Indonesia = transposedMonthValueCoulmns[146]
  const Iran = transposedMonthValueCoulmns[147]
  const Iraq = transposedMonthValueCoulmns[148]
  const Ireland = transposedMonthValueCoulmns[149]
  const Israel = transposedMonthValueCoulmns[150]
  const Italy = transposedMonthValueCoulmns[151]
  const Jamaica = transposedMonthValueCoulmns[152]
  const Japan = transposedMonthValueCoulmns[153]
  const Jordan = transposedMonthValueCoulmns[154]
  const Kazakhstan = transposedMonthValueCoulmns[155]
  const Kenya = transposedMonthValueCoulmns[156]
  const Kiribati = transposedMonthValueCoulmns[157]
  const SouthKorea = transposedMonthValueCoulmns[158]
  const Kosovo = transposedMonthValueCoulmns[159]
  const Kuwait = transposedMonthValueCoulmns[160]
  const Kyrgyzstan = transposedMonthValueCoulmns[161]
  const Laos = transposedMonthValueCoulmns[162]
  const Latvia = transposedMonthValueCoulmns[163]
  const Lebanon = transposedMonthValueCoulmns[164]
  const Lesotho = transposedMonthValueCoulmns[165]
  const Liberia = transposedMonthValueCoulmns[166]
  const Libya = transposedMonthValueCoulmns[167]
  const Liechtenstein = transposedMonthValueCoulmns[168]
  const Lithuania = transposedMonthValueCoulmns[169]
  const Luxembourg = transposedMonthValueCoulmns[170]
  const MSZaandam = transposedMonthValueCoulmns[171]
  const Madagascar = transposedMonthValueCoulmns[172]
  const Malawi = transposedMonthValueCoulmns[173]
  const Malaysia = transposedMonthValueCoulmns[174]
  const Maldives = transposedMonthValueCoulmns[175]
  const Mali = transposedMonthValueCoulmns[176]
  const Malta = transposedMonthValueCoulmns[177]
  const MarshallIslands = transposedMonthValueCoulmns[178]
  



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






