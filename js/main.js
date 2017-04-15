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

functions:
1.search artist by name and get artist id
2.get past event and location
3.get future event by artist/venue/...
4.
===================== */
var songkick_api= '2dleBwWTZC8F4EGh';
var artistName = document.getElementById("artist");
var artistID;
var pastVenues = {};
var lat=[];
var lng=[];


var searchArtist = function(artistName) {
     return $.ajax({
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

//Ref: https://github.com/odelevingne/gigLister/blob/master/src/scripts/songkick.js
//https://github.com/xsaardo/Setlist-fm-Playlists/blob/master/search.js

//Issue: Pagination(how to get all pages)

var getPastVenues = function(artistID){
  $.ajax({
    type: "GET",
    url:"http://api.songkick.com/api/3.0/artists/" + artistID + "&page= "+ "/gigography.json",
    data: {
      query: artistID,
      apikey: songkick_api
    }
  }).done(function(data){
    console.log(data);

    lat = _.map(data.resultsPage.results.event, function(venue, key){
      return venue.location.lat;
}) ;
   lng = _.map(data.resultsPage.results.event, function(venue, key){
  return venue.location.lng;
});
console.log(lat,lng);
var marker = L.circleMarker([lat, lng], {color: "blue"}).addTo(map);
  });
};

    $("#past").click(function(e) {
        artistName= $('#artist-name').val();
        searchArtist(artistName).done(function(){
          getPastVenues(artistID);
        });
    });
