var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");


// Sets up the Express App
// =============================================================
var app = express();

// listen on port 3000
var port = process.env.PORT || 3000;

//By default will use target index.js
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
	app.listen(port, function(){
		console.log("Listening in port: " + port);
	});
});


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// // override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller");

// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);


// app.listen(port);


