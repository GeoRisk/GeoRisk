var georisk = require("../models/user");

module.exports = {
  list: function(req, res, cb) {
      georisk.all(cb);
  }
};