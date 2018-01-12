
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

    app.post("/api/friends", function (req, res) {
        // TODO POST routes to "api/friends". This will be used to handle incoming survey results. 
        // Also used for handling compatibility logic
        // objFriends.push(body);
        console.log("req.body.scores",req.body.scores);

        // Determine which person is the best match
        // Working with the incoming data array "body.scores"
        // var incomingScore = [];
        // for(var i = 0; i < req.body.scores.length; i++){
        //     console.log("objFriends[i]",objFriends[i]);
        //     // objFriends[i].score.push(objFriends[i].scores[i]);
        // }
        // console.log(typeof incomingScore);
        // console.log("incomingScore",incomingScore);
        // Send back matching data
        res.json({
            "success": true,
            "data": req.body
        });
    });
};