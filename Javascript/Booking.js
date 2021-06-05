var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10iUKuEVJD8HGK6f3nXTBUUhcsSpd93-Rs6K3hRrOEQo/edit';



  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
    }

function showInfo(data, tabletop){
    console.log(data);

    var container = document.querySelector("div.cardContainer");
    container.innerHTML= ""; 


    //document.querySelector("h2.day").innerHTML = data[0].day
    //document.querySelector("td.Slot1").innerHTML = data[0].Slot1
    //document.querySelector("td.Slot2").innerHTML = data[0].Slot2
    //document.querySelector("td.Slot3").innerHTML = data[0].Slot3
     //THIS WORKS WOOOO
console.log(data.length)
    
  
    data.forEach(function(data){ 
     
    var day = data.day;
    var slot1 = data.Slot1;
    var slot2 = data.Slot2;
    var slot3 = data.Slot3;

    container.innerHTML += `<div class="center availabilityCard">
    <h2 class="day">${day}</h2>
    <table class="slots">
      <tr>
        <td class="Slot1">${slot1}</td>
        <td class="Slot2">${slot2}</td>
        <td class="Slot3">${slot3}</td>
      </tr>
    </table>
  </div>`
    }
    )}; 

  
  window.addEventListener('DOMContentLoaded', init);
