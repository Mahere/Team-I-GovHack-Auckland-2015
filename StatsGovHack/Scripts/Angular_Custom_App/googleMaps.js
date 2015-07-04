$(document).ready(initialize);

var suburbs = {};
suburbs['Auckland CBD'] = {
    center: new google.maps.LatLng(-36.846815, 174.766249)
};
suburbs['Takapuna'] = {
    var location = getCoOrdinates('Takapuna');
    center: new google.maps.LatLng(location.latitude,location.longitude)
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
        suburbCircle = new google.maps.Circle(populationOptions);
    }
}

function getCoOrdinates(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            return results[0].geometry.location.getLatLng();
        } else
            alert('error: ' + status);
    });
};