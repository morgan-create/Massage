var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0rq0Aqup7ue_aQNY2oKrkDy1dVnkQ4mh8liS5td1p5fE7ItRpVbq-p0ZnwhFXxQbGneh--B42-lQk/pubhtml?gid=0&single=true';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);

    data.forEach(function(data){
      console.log(data.Person);
      console.log(data.Slices);
    })
    
  }

  window.addEventListener('DOMContentLoaded', init)

////////////////////////////////////////////

  google.charts.load("current", {packages:["corechart"]});


      google.charts.setOnLoadCallback(drawChart);


      function drawChart() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Qn9Rrax5hSLGVEsXk7mt9ChYPrJhHk6W8ACHcSAUVU0/edit?usp=sharing');
        query.send(handleQueryResponse);
        }

      function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
        chart.draw(data, null);



        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };



        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }