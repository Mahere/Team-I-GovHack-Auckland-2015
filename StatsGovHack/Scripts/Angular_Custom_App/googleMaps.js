﻿$(document).ready(initialize);
var map;
var suburbs = [];

function getAllSuburbs() {
    var url =  '/home/GetAllSuburbs';
    $.get(url, function (result) {
        saveSuburbs(result);
    });
}

function saveSuburbs(list) {
    for (var i=0; i<list.length;i++) {
        var sub = new Suburb(list[i].suburb, list[i].area, list[i].latitude, list[i].longitude);
        suburbs.push(sub);
    }
    createCircle();
}
var suburbCircles = [];

function createCircle() {
    for (var i = 0; i < suburbs.length; i++) {
        var pop = getPopulation(suburbs[i].name);
        var popColour = colourCode(pop); //insert population here
        var populationOptions = {
            strokeColor: popColour,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: popColour,
            fillOpacity: 0.8,
            map: map,
            center: suburbs[i].center,
            radius: 800
        };

        var suburbCircle = {
            suburb: suburbs[i].name,
            circle: new google.maps.Circle(populationOptions)
        }

        suburbCircles.push(suburbCircle);
    }
}

function initialize() {
    var mapOptions = {
        center: { lat: -36.84379, lng: 174.76247 },
        zoom: 11
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    getAllSuburbs();
    

    for (var j = 0; j < suburbCircles.length; j++) {
        google.maps.event.addListener(suburbCircles[j].circle, 'click', selectSuburb);
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
    var population = 0;
    //var yr = $('#slider1').val();
    var yr = 2013;
    var uri = '/home/GetPopulationBySuburb';
    $.ajax({
            url: uri,
            async: false,
            method: "GET",
            dataType: 'json',
            data: { suburb: sub, year: yr }
        })
    .done(function (result) {    
        population = result;
    });
    return population;
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