$(document).ready(initialize);

var suburbs = {};
suburbs['Auckland CBD'] = {
    center: new google.maps.LatLng(-36.846815, 174.766249)
};
suburbs['New Market'] = {
    center: new google.maps.LatLng(-36.870385, 174.774553)
};
suburbs['Parnell'] = {
    center: new google.maps.LatLng(-36.853791, 174.778626)
};
suburbs['Mt Albert'] = {
    center: new google.maps.LatLng(-36.884209, 174.714081)
};

var suburbCircle;

function initialize() {
    var mapOptions = {
        center: { lat: -36.84379, lng: 174.76247 },
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    for (var suburb in suburbs) {
        var populationOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: suburbs[suburb].center,
            radius: 1000
        };
        var population = checkPopulation(suburb);
        console.log(population + ' People in ' + suburb);
        suburbCircle = new google.maps.Circle(populationOptions);
    }
}

function checkPopulation(sub) {
    $.ajax({
        datatype: "json",
        url: '/vw_pastpop2013.json',
        success: function (response) {
            return addPopulation(response,sub);
        }
    });
}

function addPopulation(list, keyword) {
    var pop = 0;
    for(var item in list) {
        if (list.hasOwnProperty(item)) {
            if (item.suburb == keyword) {
                pop += item.value;
            }
        }
    }
    return pop;
}
