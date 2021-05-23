var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10iUKuEVJD8HGK6f3nXTBUUhcsSpd93-Rs6K3hRrOEQo/edit';



  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
    }

function showInfo(data, tabletop){
    console.log(data);

    document.querySelector("h2.day").innerHTML = data[0].day
    document.querySelector("td.Slot1").innerHTML = data[0].Slot1
    document.querySelector("td.Slot2").innerHTML = data[0].Slot2
    document.querySelector("td.Slot3").innerHTML = data[0].Slot3
     //THIS WORKS WOOOO

    data.forEach(function(data){ 
        
    console.log(data)

    }
    )}; 


  window.addEventListener('DOMContentLoaded', init);
