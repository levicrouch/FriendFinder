// Required npm packages

var path = require("path");

///////////////////////////////////////////////////////////////////
// ROUTES
///////////////////////////////////////////////////////////////////


module.exports = function (app) {
    // export routes
    // DONE "/survey" - Displays the the survey page
    // DONE "/" = directs to home.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};