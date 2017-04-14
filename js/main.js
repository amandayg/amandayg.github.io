// Leaflet map setup
var map = L.map('map', {
  center: [40.801277, -73.947313],
  zoom: 3
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


/* =====================
setlist.fm api: c78418f6-21c9-4878-80bd-f28f32fbb934
songkick api: 2dleBwWTZC8F4EGh
===================== */
var songkick_api= '2dleBwWTZC8F4EGh';
var artistName = document.getElementById("artist");
var artistID;
var pastVenues = {};


var searchArtist = function(artistName) {
    $.ajax({
      type: "GET",
      url: "http://api.songkick.com/api/3.0/search/artists.json",
      data: {
        query: artistName,
        apikey: songkick_api
      }
    }).done(function(data){
      console.log(data);
      console.log(data.resultsPage.results.artist[0]["displayName"]);
      artistID = data.resultsPage.results.artist[0]["id"];
      console.log(artistID);
  });
};

  // var geocoder = function(geocoderurl){
  //   return $.ajax(geocoderurl).done(function(data){
  //     console.log(data);
  //     destination = data.features[0];
  //     console.log(destination);
  //   });
  // };

//Ref: https://github.com/odelevingne/gigLister/blob/master/src/scripts/songkick.js
//https://github.com/xsaardo/Setlist-fm-Playlists/blob/master/search.js

var getPastVenues = function(artistID){

};

    $("#past").click(function(e) {
        artistName= $('#artist-name').val();
        searchArtist(artistName);
    });


// $("#past").click(function(e) {
//   var artist = $('#artist-name').val();
//   var venueurl = venueAPI(artist);
//   venueurl = JSON.stringify();
//   // geocoder(addressurl).done(function() {
//   //   var routeurl = routeAPI(JSON.stringify(getRouteJson(currentLocation, destination)));
//   //   getRoute(routeurl);
//   // });
// });
