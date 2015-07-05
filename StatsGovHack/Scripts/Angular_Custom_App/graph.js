
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
            console.log("hit empty" + selectedYear);

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
    if (console)

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'House Prices',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('housing_chart'));
    if (selectedYear) {
        google.visualization.events.addListener(chart, 'ready', function (e) {
            for (var i2 = 0; i2 < convertedArr.length; i2++) {
                for (var j = 0; j < convertedArr[i2].length; j++) {
                    var item = convertedArr[i2];
                    if (parseInt(item[0]) == parseInt(selectedYear)) {
                        chart.setSelection([{ row: (i2 - 1), column: null }]);

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
    var tempArr = ['Year', 'Population', { 'type': 'string', 'role': 'style' }];
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
    if (console)

    var graphData = google.visualization.arrayToDataTable(convertedArr);

    var options = {
        title: 'Population',
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



function getCrimeData(selectedSuburb) {
    var url = 'Home/GetCrimeDataBySuburb';
    $.get(url, {suburb: selectedSuburb}, function (response) {
        if (console)
        crimeResult = response;
        return response;
    });
};

var getEducationData = function (selectedSuburb) {
    var url = 'Home/GetSchoolDecileDataBySuburb';
    $.get(url, { suburb: selectedSuburb }, function (response) {
        if (console)
        schoolDecileResult = response;
        return response;
    });
};

var getHousingData = function (selectedSuburb) {
    var url = 'Home/GethousePriceDataBySuburb';
    $.get(url, { suburb: selectedSuburb }, function (response) {
        if (console)
        housingResult = response;
        return response;
    });
};

var getPopullationData = function (selectedSuburb) {
    
    var url = 'Home/GetAllPopulationBySuburb';
    $.get(url, { suburb: selectedSuburb }, function (response) {
        if (console)
        popullationResult = response;
        return response;
    });

}

getCrimeData("Auckland West Area");
getPopullationData("Henderson");
getEducationData("Henderson");
getHousingData("Henderson");

//Update Widgets- Call this based on change detected by the slider and map
function updateCharts(time) {
    if (console)
    

    drawGraphs(time);
};