$(document).ready(function(){

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

//Vertical NavBar Media Social

// var options={
//     "publisher": "ur-6826fcab-fc57-b912-2fb8-fe8bddac3793",
//     "position": "left",
//     "ad": { "visible": false, "openDelay": 5, "closeDelay": 0},
//     "chicklets": { "items": ["facebook", "twitter", "googleplus", "pinterest", "stumbleupon", "linkedin", "sharethis"]}};
// var st_hover_widget = new sharethis.widgets.hoverbuttons(options);
});


//Toggle Function
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

//
// var express = require('express'),
//     http = require('http');
//
// var app = express();
//
// app.engine('handlebars', require('express3-handlebars')({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
//
// app.use(require('morgan')('dev'));
//
// app.use(express.static(__dirname + '/public'));
//
// var getCity = (function(){
//     var cache = {
//         refreshed: 0,
//         refreshInterval: 1000 * 60 * 60 * 24,  // 24 hours
//         city: [],
//     };
//     return function(cb){
//         var now = Date.now();
//         if( now > cache.refreshed + cache.refreshInterval ) {
//             cache.refreshed = now;
//             http.get('http://api.civicapps.org/city/', function(res){
//                 var json = '';
//                 res.on('data', function(chunk){
//                     json += chunk;
//                 });
//                 res.on('end', function(){
//                     try {
//                         var city = JSON.parse(json);
//                         if(city.status !== 'ok') throw new Error('API failed with status "' + status + '".');
//                         var cityById = {};
//                         cache.city = city.results.map(function(city){
//                             city = {
//                                 id: city.PropertyID,
//                                 name: city.Property,
//                                 amenities: city.amenities,
//                                 loc: { lat: city.loc.lat, lng: city.loc.lon },
//                             };
//                             cityById[city.id] = city;
//                             return city;
//                         });
//                         cache.city.byId = cityById;
//                         console.log(new Date() + ': city cache refreshed.');
//                     } catch(err){
//                         console.error('Error refreshing city cache: ' + err.stack);
//                     }
//                     cb(cache.city);
//                 });
//             });
//         } else {
//             cb(cache.city);
//         }
//     };
// })();
//
// app.get('/', function(req, res){
//     res.render('home');
// });
//
// app.get('/error', function(req, res){
//     throw new Error('Whoops!');
// });
//
// app.get('/api/city/or/portland', function(req, res){
//     getCity(function(city){
//         res.json(city);
//     });
// });
//
// app.get('/partials/city-info/:id', function(req, res){
//     getCity(function(city){
//         res.render('partials/city-info', { city: city.byId[req.params.id], layout: null });
//     });
// });
//
// app.use(function(req, res){
//     res.render('404');
// });
//
// app.use(function(err, req, res, next){
//     console.error('Server error: ' + err.stack);
//     res.render('500');
// });
//
// app.listen(3000, function(){
//     console.log('listening on port 3000');
// });