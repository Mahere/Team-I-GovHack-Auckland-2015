
google.setOnLoadCallback(drawGraphs);

function drawGraphs() {
    drawCrimeChart();
    drawEducationChart();
    drawHousingChart();
    testData();
};

var drawCrimeChart = function () {
    
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Crime Rate'],
      ['2004', 1000],
      ['2005', 1170],
      ['2006', 660],
      ['2007', 1030]
    ]);

    var options = {
        title: 'Crime Rate',
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


//Retrieve Data

var updateCharts = function (location, time) {
    //switch - chart type
    //callData metho below appropriately.
};

var getCrimeData = function () {
    //Call service
};

var getEducationData = function () {
    //Call service
};

var getHousingData = function () {
    //Call service
};