module.exports = function(sequelize, dataTypes) {
	var User = sequelize.define("User", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
		},
		city_name: dataTypes.STRING,
		rating: dataTypes.BOOLEAN,
		review: dataTypes.TEXT,
		//Need to convert date into proper form.
		date: dataTypes.INTEGER
	});
	return User;
}