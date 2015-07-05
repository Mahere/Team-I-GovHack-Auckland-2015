$(document).ready(initialize);

var suburbs = [];

function getAllSuburbs() {
    var url = URL + '/home/GetAllSuburbs';
    $.get(url, function (result) {
        console.log(result);
        saveSuburbs(result);
    });
}

function saveSuburbs(list) {
    for (var i=0; i<list.length;i++) {
        var sub = new Suburb(list[i].suburb, list[i].area, list[i].latitude, list[i].longitude);
        console.log('pushing ' + list[i].suburb+',' +list[i].area+','+ list[i].latitude+','+list[i].longitude + ' to suburb array');
        suburbs.push(sub);
    }
}
var suburbCircles = [];

function initialize() {
    var mapOptions = {
        center: { lat: -36.84379, lng: 174.76247 },
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    getAllSuburbs();
    console.log(suburbs);
    getPopulation('Ranui');
    for (var i=0;i<suburbs.length;i++) {
        var popColour = colourCode(suburbs[i].population); //insert population here
        var populationOptions = {
            strokeColor: popColour,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: popColour,
            fillOpacity: 0.8,
            map: map,
            center: suburbs[suburb].center,
            radius: 800
        };

        var suburbCircle = {
            suburb: suburb,
            circle: new google.maps.Circle(populationOptions)
        }
     
          suburbCircles.push(suburbCircle);
    }

    for (var i = 0; i < suburbCircles.length; i++) {
        google.maps.event.addListener(suburbCircles[i].circle, 'click', selectSuburb);
    }
    $("slider1").val("2014");
}

function selectSuburb() {
    alert("circle clicked");
}

function clearCircles() {
    for (var i in suburbCircles) {
        suburbCircles[i].setMap(null);
    }
}

function getPopulation(sub) {
    var yr = $('#slider1').val();
    console.log('geting population for '+ yr);
    var url = URL + '/home/GetPopulationBySuburb';
    $.get(url, { suburb: sub, year: yr }, function(result) {
        console.log("Population for "+ sub + ' is ' +result);
    });
}

function UpdateYear(val) {
    document.querySelector('#selectedYear').value = val;
}

function colourCode(pop) {
    if (pop < 5000) {
        return '#F5F266';
    }else if (pop <= 10000) {
        return '#F1CD4A';
    }else if (pop < 15000) {
        return '#E49D3E';
    }else if (pop < 20000) {
        return '#DC623E';
    } else {
        return '#DD2C24';
    }
}