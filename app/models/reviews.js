// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Rview" model that matches up with DB
var Review = sequelize.define("review", {
  title: {
    type: Sequelize.STRING
  },
  brew_name: {
    type: Sequelize.STRING
  },
  comment: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

// Syncs with DB
Review.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Review;
