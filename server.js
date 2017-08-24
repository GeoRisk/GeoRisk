// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var methodOverride = require("method-override");

// Requiring passport as we've configured it
var passport = require("./config/passport");


// Sets up the Express App
// =============================================================
var app = express();

// listen on port 3000
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//By default will use target index.js
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine('handlebars',
    exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// We need to use sessions to keep track of user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/api-routes-auth.js")(app);
require("./routes/html-routes-auth.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
	app.listen(PORT, function(){
		console.log("App Listening On Port: " + PORT);
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


