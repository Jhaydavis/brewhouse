var path = require('path');

module.exports = function (app) {



    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.get('/locator', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/locator.html'));
    });


    //app.use(function (req, res) 
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });


    app.get("/view", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    // add route loads the add.html page, where users can enter new reviews to the db
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    // all route loads the all.html page, where all reviews in the db are displayed
    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });

    // low ratings
    app.get("/low", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/low.html"));
    });

    // high ratings
    app.get("/high", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/high.html"));
    });



};
