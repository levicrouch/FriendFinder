
// pull in the objFriends from ../data/friends file
var objFriends = require("../app/data/friends");
// console.log("objFriends",objFriends);
///////////////////////////////////////////////////////////////////
// ROUTES
///////////////////////////////////////////////////////////////////


module.exports = function (app) {
    // export routes
    // TODO GET route for "/api/friends" - used to display a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(objFriends);
    });
    // TODO POST routes to "api/friends". This will be used to handle incoming survey results. Also used for handling compatibility logic
    app.post("/api/friends", function (req, res) {
        var body = req.body;
        res.json({
            "success": true,
            "data": body
        });
    });
};