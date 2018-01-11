// Add required packages
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path"); 

var app = express();

// Listening PORT
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// Routes
// ================================================================================

require("../routing/apiRoutes.js")(app);
require("../routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("FriendFinder listening on PORT: " + PORT);
});
