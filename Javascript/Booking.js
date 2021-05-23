var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10iUKuEVJD8HGK6f3nXTBUUhcsSpd93-Rs6K3hRrOEQo/edit';


  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop){
alert('woo you did it!');
console.log(data);
};

  window.addEventListener('DOMContentLoaded', init)
