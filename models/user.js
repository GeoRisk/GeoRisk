module.exports = function(sequelize, dataTypes) {
	var User = sequelize.define("User", {
		id: dataTypes.INT,
		city_name: dataTypes.STRING,
		rating: dataTypes.BOOLEAN,
		review: dataTypes.TEXT
		//Need to convert date into proper form.
		date: dataTypes.INT
	});
	return User;
}