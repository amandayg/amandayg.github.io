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
Add from carto?

var cartoUserName = 'amandayg';
var cartoVizId = 'd1552d4c-10cf-11e7-9df1-0ee66e2c9693';

var layerUrl = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId+'/viz.json';

cartodb.createLayer(map, layerUrl)
  .on('done', function(layer) {
    layer.addTo(map);
  }).on('error', function(err) {
    console.log(err);
  });

===================== */
