

// var weatherKey = require ('./keys.js');

// var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
// //userCity is currently dummy data. Need to feed user input here.
// var userCity = "London";
// var userSearchURL = weatherURL + userCity + weatherKey;
// console.log(userSearchURL);

// $.ajax({
// 	url: userSearchURL,
// 	number: 1,
// 	method: "GET"
// }).done(function(response){
// 	console.log(response);
// });

//Require models.
var db = require("../models");

module.exports = function(app){
	//GET route for displaying all of the the user preferences.
	app.get("api/georisk", function(req, res) {
		db.userpref.findAll({}).then(function(dbUserPref) {
			res.json(dbUserPref);
		});
	});

	//POST route for saving a new user preference.
	app.post("api/georisk", function(req,res){
		db.userpref.create({
			city_name: req.body.city_name,
			rating: req.body.rating,
			review: req.body.review
		}).then(function(dbUserPref){
			res.json(dbUserPref);
		});
	});

	//PUT route for updating user preferences.
	app.put("api/georisk", function(dbUserPref){
		db.userpref.update({
			rating: req.body.rating,
			review: req.body.review
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbUserPref){
			res.json(dbUserPref);

		});
	});

	//DELETE route for deleting places from favorites list.
};