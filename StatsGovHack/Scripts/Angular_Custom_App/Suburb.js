var Suburb = function(name, area, lat, lng) {
    this.name = name;
    this.area = area;
    this.lat = lat;
    this.lng = lng;
    this.center = new google.maps.LatLng(this.lat, this.lng);
    this.circle = null;
}

//Suburb.prototype.addCircle = function(population) {
//    var popColour = colourCode(population); //insert population here
//    var populationOptions = {
//        strokeColor: popColour,
//        strokeOpacity: 0.8,
//        strokeWeight: 2,
//        fillColor: popColour,
//        fillOpacity: 0.8,
//        map: map,
//        center: this.center,
//        radius: 800
//    };
//    this.circle = new google.maps.Circle(populationOptions);
//};

//Suburb.prototype.removeCircle = function() {
//    this.circle.setMap(null);
//    this.circle = null;
//}