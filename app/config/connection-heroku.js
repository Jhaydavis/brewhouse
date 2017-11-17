// Set up database connection
var mysql = require('mysql');
var Sequelize = require("sequelize");
var connection;

//  JAWSDB - heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = new Sequelize("hoppy_reviews", "root", "", {
		host: "localhost",
		dialect: "mysql",
		pool: {
		  max: 5,
		  min: 0,
		  idle: 10000
		}
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
