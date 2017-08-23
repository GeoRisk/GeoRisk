var georisk = require("../models/user");
var controller = require('../controllers/georisk_controller');

module.exports = function(app) {
    // get route -> index
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/georisk", function(req, res) {
        // express callback response by calling georisk.selectAllgeorisk
        controller.list(req, res, function(data) {
            // Wrapping the array of returned georisks in a object so it can be referenced inside our handlebars
            var hbsObject = { georisk: data };
            res.render("index", hbsObject);
        });
    });

    // post route -> back to index
    app.post("/georisk/create", function(req, res) {
        // takes the request object using it as input for buger.addgeorisk
        georisk.create(req.body.georisk_name, function(result) {
            // wrapper for orm.js that using MySQL insert callback will return a log to console,
            // render back to index with handle
            console.log(result);
            res.redirect("/");
        });
    });

    // put route -> back to index
    app.put("/georisk/update", function(req, res) {
        georisk.update(req.body.georisk_id, function(result) {
            // wrapper for orm.js that using MySQL update callback will return a log to console,
            // render back to index with handle
            console.log(result);
            res.redirect("/");
        });
    });
}
