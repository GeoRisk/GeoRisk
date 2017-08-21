module.exports = function(sequelize, dataTypes) {
	var User = sequelize.define("User", {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
		},
		first_name: dataTypes.STRING,
		last_name: dataTypes.STRING,
		email: dataTypes.STRING,
		password: dataTypes.STRING
	});
	return User;
};