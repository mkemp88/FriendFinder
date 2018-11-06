
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res) {
        var userinput = req.body;
        var userResponse = userinput.scores;
        var matchName = '';
        var matchImage = '';
        var difference = 10000;

        for(var i = 0; i<friends.length; i++) {
            var diff = 0;
            for(var k = 0; k<userResponse.length; i++) {
                diff += Math.abs(friends[i].scores[k] - userResponse[k]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(userinput);
        res.json({status: "OK", matchName: matchName, matchImage: matchImage})
    })
}