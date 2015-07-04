
google.setOnLoadCallback(drawGraphs);

function drawGraphs() {
    drawCrimeChart();
    drawEducationChart();
    drawHousingChart();
};

var crimeResult;

var drawCrimeChart = function () {
    var data = crimeResult;
    var convertedArr = [];
    var tempArr = ['Year', 'Crime Rate'];
    convertedArr.push(tempArr);
    for (var i = 0; i < data.length; i++) {
        var currentElement = data[i];
        var tempArr = [];
        tempArr[0] = currentElement.year;
        tempArr[1] = parseInt(currentElement.value);
        convertedArr.push(tempArr);
    }
    console.log(convertedArr);

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'Crime Rate',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('crime_chart'));
    chart.draw(graphData, options);
};

var drawEducationChart = function (){

};

var drawHousingChart = function () {

};


//Retrieve Data



var URL = "http://localhost:49313/";

function getCrimeData(selectedSuburb) {
    var url = URL + 'Home/GetCrimeDataBySuburb';
    $.get(url, {suburb: selectedSuburb}, function (response) {
        console.log(response);
        crimeResult = response;
        return response;
    });
};

var getEducationData = function () {
    //Call service
};

var getHousingData = function () {
    //Call service
};

getCrimeData("Auckland Central Area");

//Update Widgets- Call this based on change detected by the slider and map
var updateCharts = function (location, time) {
    getCrimeData(location);
    drawGraphs();
};