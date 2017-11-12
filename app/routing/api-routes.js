var brewhouseData = require('../data/brewhouse.js');
var Review = require("../models/reviews.js");

module.exports = function(app) {

    // GET route for /api/brewhouses  returns brewhouse Data.
    app.get('/api/brewhouses', function(req, res) {
        res.json(brewhouseData);
    });

    // POST route for /api/brewhouses  takes in the new data and responds with the most compatible match.
    app.post('/api/brewhouses', function(req, res) {
        // Our user is the data sent in the request.
        var thisUser = req.body;
        var differences = [];

        // If there is more than one brewhouse  to compare to,
        if (brewhouseData.length > 1) {
            // Step through these potential friends.
            brewhouseData.forEach(function(user) {
                var totalDifference = 0;

                // For each answer, compare the answers and add the absolute value of the difference to the total difference.
                for (var i = 0; i < thisUser.answers.length; i++) {
                    var otherAnswer = user.answers[i];
                    var thisAnswer = thisUser.answers[i];
                    var difference = +otherAnswer - +thisAnswer;
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });

            // Find the minimum difference score.
            var minimumDifference = Math.min.apply(null, differences);

            // Since there may be more than one potential brewhouse  with that score, create an array.
            var bestMatches = [];

            // For each item in differences, if it is equal to the minimumDifference, add the corresponding brewhouseData to the bestMatches array.
            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(brewhouseData[i]);
                }
            }

            // Then send bestMatches to the client.
            res.json(bestMatches);
        // If there is only one brewhouse  to compare to, skip all that work and just send back that brewhouse .
        } else {
            res.json(brewhouseData);
        }

        // Once you're done comparing, add the new user to the potential brewhouse data.
        brewhouseData.push(thisUser);

    });
    
      app.get("/api/all", function(req, res) {
    Review.findAll({}).then(function(results) {
      res.json(results);
    });
  });


  // Get all reiews on a specific brewery
  app.get("/api/brew_name/:brew_name", function(req, res) {
    if (req.params.brew_name) {
      Review.findAll({
        //Found this on StackOverflow! the LIKE plus % allow me to do a broad match query
        where: {
          brew_name: { like: '%' + req.params.brew_name + '%'}
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Get all "high" ratings (ratings of 7 or more)
  app.get("/api/review/high", function(req, res) {
    Review.findAll({
      where: {
        rating: {
          $gte: 7
        }
      },
      order: [["rating", "DESC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

 

  // Add a review
  app.post("/api/new", function(req, res) {
    console.log("Rating Data:");
    console.log(req.body);
    Review.create({
      title: req.body.title,
      brew_name: req.body.brew_name,
      comment: req.body.comment,
      rating: req.body.rating
    });
  });

  // Delete a review
  app.post("/api/delete", function(req, res) {
    console.log("Review Data:");
    console.log(req.body);
    Review.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};

