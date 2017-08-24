// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


//Dependencies
//======================================================
var mysql = require("mysql");
var Sequelize = require("sequelize");

var sequelize = new Sequelize("georisk", "root", "password") {
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "georisk"
	pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	}

}
module.exports = sequelize;

// var connection = mysql.createConnection({		
 //   host: "127.0.0.1",		
 //   user: "root",		
 //   password: "",		
 //   database: "georisk"		
 // });		
 		
 		
 // connection.connect(function(err) {		
 //   if (err) {		
 //     console.error("error connecting: " + err.stack);		
 //     return;		
 //   }		
 //   console.log("connected as id " + connection.threadId);		
 // });
