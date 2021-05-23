var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10iUKuEVJD8HGK6f3nXTBUUhcsSpd93-Rs6K3hRrOEQo/edit';



  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
    }

function showInfo(data, tabletop){
    console.log(data);
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
    console.log(data[3])

    document.querySelector("h2.day").innerHTML = data[0].day
    document.querySelector("td.Slot1").innerHTML = data[0].Slot1
    document.querySelector("td.Slot2").innerHTML = data[0].Slot2
    document.querySelector("td.Slot3").innerHTML = data[0].Slot3
     //THIS WORKS WOOOO

    data.forEach(function(data){ 
        
    console.log(data.day);
    console.log(data.Slot1);
    console.log(data.Slot2);
    console.log(data.Slot3);

    }
    )}; 


  window.addEventListener('DOMContentLoaded', init);
