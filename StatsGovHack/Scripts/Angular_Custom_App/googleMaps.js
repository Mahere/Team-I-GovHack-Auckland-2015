$(document).ready(initialize);

var suburbs = {};
suburbs['Auckland CBD'] = {
    center: new google.maps.LatLng(-36.846815, 174.766249),
    population: 21000
};
suburbs['New Market'] = {
    center: new google.maps.LatLng(-36.870385, 174.774553),
    population: 19000
};
suburbs['Parnell'] = {
    center: new google.maps.LatLng(-36.853791, 174.778626),
    population: 14000
};
suburbs['Mt Albert'] = {
    center: new google.maps.LatLng(-36.884209, 174.714081),
    population: 4999
};

var suburbCircle;

function initialize() {
    var mapOptions = {
        center: { lat: -36.84379, lng: 174.76247 },
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    for (var suburb in suburbs) {
        var popColour = colourCode(suburbs[suburb].population);
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
        suburbCircle = new google.maps.Circle(populationOptions);
    }
    $("slider1").val("2014");
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