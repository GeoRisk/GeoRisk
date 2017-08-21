//Dependencies
var path = require ("path");

module.exports = function(app) {
	app.get("/index", function(req, res){
		res.sendFile(path.join(_dirname, "../views/index.handlebars"))
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(_dirname, "../views/layouts/main.handlebars"));
	});
}