
google.setOnLoadCallback(drawGraphs);

function drawGraphs() {
    drawCrimeChart();
    drawEducationChart();
    drawHousingChart();
    testData();
};

var drawCrimeChart = function () {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('crime_chart'));

    chart.draw(data, options);
};

var drawEducationChart = function (){

};

var drawHousingChart = function () {

};

function testData() {
    $.getScript("Scripts/Angular_Custom_App/mainController.js", function () {
        
        var dt = getData();
        console.log(dt);
    });
    
};