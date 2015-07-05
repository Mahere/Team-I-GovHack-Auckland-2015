
google.setOnLoadCallback(draw);

function draw() {
    drawGraphs();
};

function drawGraphs(time) {
    drawCrimeChart(time);
    drawEducationChart(time);
    drawHousingChart(time);
    drawPopullationChart(time);
}

var crimeResult;
var popullationResult;
var schoolDecileResult;
var housingResult;

var drawCrimeChart = function (selectedYear) {
    var data = crimeResult;
    var convertedArr = [];
    var tempArr = ['Year', 'Crime Rate', { 'type': 'string', 'role': 'style' }];
    convertedArr.push(tempArr);
    for (var i = 0; i < data.length; i++) {
        var currentElement = data[i];
        var tempArr = [];
        tempArr[0] = currentElement.year;
        tempArr[1] = parseInt(currentElement.value);
        tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        if (selectedYear != null) {
            if (selectedYear == tempArr[0]) {
                tempArr[2] = 'point { size: 8; shape: circle; fill-color: #FF6600}';
            }
        } else {
            tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        }
        convertedArr.push(tempArr);
    }

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'Crime Rate',
        curveType: 'function',
        legend: { position: 'bottom' },
        animation: { "startup": true }
    };
    var chart = new google.visualization.LineChart(document.getElementById('crime_chart'));
    if(selectedYear){
        google.visualization.events.addListener(chart, 'ready', function (e) {
            for (var i = 0; i < convertedArr.length; i++) {
                for (var j = 0; j < convertedArr[i].length; j++) {
                    var item = convertedArr[i];
                    if (parseInt(item[0]) == parseInt(selectedYear)) {
                        chart.setSelection([{ row: (i-1), column: null }]);

                    }
                }
            }
        });
    }
    
    chart.draw(graphData, options);
};

var drawEducationChart = function (selectedYear){
    var data = schoolDecileResult;
    var convertedArr = [];
    var tempArr = ['Year', 'Decile', { 'type': 'string', 'role': 'style' }];
    convertedArr.push(tempArr);
    for (var i = 0; i < data.length; i++) {
        var currentElement = data[i];
        var tempArr = [];
        tempArr[0] = currentElement.year;
        tempArr[1] = parseInt(currentElement.value);
        tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        if (selectedYear != null) {
            if (selectedYear == tempArr[0]) {
                tempArr[2] = 'point { size: 8; shape: circle; fill-color: #FF6600}';
            }
        } else {
            tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        }
        convertedArr.push(tempArr);
    }

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'School Decile',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('education_chart'));
    if (selectedYear) {
        google.visualization.events.addListener(chart, 'ready', function (e) {
            for (var i = 0; i < convertedArr.length; i++) {
                for (var j = 0; j < convertedArr[i].length; j++) {
                    var item = convertedArr[i];
                    if (parseInt(item[0]) == parseInt(selectedYear)) {
                        chart.setSelection([{ row: (i - 1), column: null }]);

                    }
                }
            }
        });
    }
    chart.draw(graphData, options);
};

var drawHousingChart = function (selectedYear) {
    var data = housingResult;
    var convertedArr = [];
    var tempArr = ['Year', 'House Price', { 'type': 'string', 'role': 'style' }];
    convertedArr.push(tempArr);
    for (var i = 0; i < data.length; i++) {
        var currentElement = data[i];
        var tempArr = [];
        tempArr[0] = currentElement.year;
        tempArr[1] = parseInt(currentElement.value);
        tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        if (selectedYear != null) {
            if (selectedYear == tempArr[0]) {
                tempArr[2] = 'point { size: 8; shape: circle; fill-color: #FF6600}';
            }
        } else {
            tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        }
        convertedArr.push(tempArr);
    }
    console.log(convertedArr);

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'House Prices',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('housing_chart'));
    if (selectedYear) {
        google.visualization.events.addListener(chart, 'ready', function (e) {
            for (var i = 0; i < convertedArr.length; i++) {
                for (var j = 0; j < convertedArr[i].length; j++) {
                    var item = convertedArr[i];
                    if (parseInt(item[0]) == parseInt(selectedYear)) {
                        chart.setSelection([{ row: (i - 1), column: null }]);

                    }
                }
            }
        });
    }
    chart.draw(graphData, options);
};

var drawPopullationChart = function(selectedYear){
    var data = popullationResult;
    var convertedArr = [];
    var tempArr = ['Year', 'Popullation', { 'type': 'string', 'role': 'style' }];
    convertedArr.push(tempArr);
    for (var i = 0; i < data.length; i++) {
        var currentElement = data[i];
        var tempArr = [];
        tempArr[0] = currentElement.year;
        tempArr[1] = parseInt(currentElement.value);
        tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        if (selectedYear != null) {
            if (selectedYear == tempArr[0]) {
                tempArr[2] = 'point { size: 8; shape: circle; fill-color: #FF6600}';
            }
        } else {
            tempArr[2] = 'point { size: 7; shape-type: circle; fill-color: #15A0C8}';
        }
        convertedArr.push(tempArr);
    }
    console.log(convertedArr);

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'Popullation',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('popullation_chart'));
    if (selectedYear) {
        google.visualization.events.addListener(chart, 'ready', function (e) {
            for (var i = 0; i < convertedArr.length; i++) {
                for (var j = 0; j < convertedArr[i].length; j++) {
                    var item = convertedArr[i];
                    if (parseInt(item[0]) == parseInt(selectedYear)) {
                        chart.setSelection([{ row: (i - 1), column: null }]);

                    }
                }
            }
        });
    }
    chart.draw(graphData, options);
};

//Retrieve Data
var URL = "http://localhost:49313/";    //Dev
//var URL = "http://mahere-govhack15nz.azurewebsites.net/"; //Production

function getCrimeData(selectedSuburb) {
    var url = URL + 'Home/GetCrimeDataBySuburb';
    $.get(url, {suburb: selectedSuburb}, function (response) {
        console.log(response);
        crimeResult = response;
        return response;
    });
};

var getEducationData = function (selectedSuburb) {
    var url = URL + 'Home/GetSchoolDecileDataBySuburb';
    $.get(url, { suburb: selectedSuburb }, function (response) {
        console.log(response);
        schoolDecileResult = response;
        return response;
    });
};

var getHousingData = function (selectedSuburb) {
    var url = URL + 'Home/GethousePriceDataBySuburb';
    $.get(url, { suburb: selectedSuburb }, function (response) {
        console.log(response);
        housingResult = response;
        return response;
    });
};

var getPopullationData = function (selectedSuburb) {
    
    var url = URL + 'Home/GetAllPopulationBySuburb';
    $.get(url, { suburb: selectedSuburb }, function (response) {
        console.log(response);
        popullationResult = response;
        return response;
    });

}

getCrimeData("Auckland Central Area");
getPopullationData("Auckland Central West");
getEducationData("Mt Eden");
getHousingData("Pakuranga");

//Update Widgets- Call this based on change detected by the slider and map
function updateCharts(time) {
    console.log("@ updateCharts " + time);
    

    drawGraphs(time);
};