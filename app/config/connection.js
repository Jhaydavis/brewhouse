// Set up database connection
var mysql = require('mysql');
var Sequelize = require("sequelize");
var connection;

//  JAWSDB - heroku
if (process.env.JAWSDB_URL) {
	connection = Sequelize.createConnection(process.env.JAWSDB_URL);
} else {
	connection = Sequelize.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'hoppy_reviews'
	});
};


connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;
