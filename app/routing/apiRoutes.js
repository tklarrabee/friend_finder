var express = require('express');
var friends = require('../data/friends');

var router = express.Router();

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        // take difference of scores between user's answers and friends db answers\
        var match = [];
        var user = req.body
        console.log(req.body);
        for(var i=0; i < friends.length; i++){
            var userAnswer = user.scores;
            var friendAnswer = friends[i].scores;
            var compatability = 0;
            console.log(friends[i].name);
            for(var d=0; d<10; d++){
                var difference = Math.abs(userAnswer[d]-friendAnswer[d]);
                console.log("USER "+ userAnswer[d] +" || FRIEND " + friendAnswer[d]);
                compatability += difference;
            }
            var friendMatch = {compatability: compatability, friend: friends[i]}
            match.push(friendMatch);
        }

        function compare(a , b){
            const matchA = a.compatability;
            const matchB = b.compatability;

            let comparison = 0;
            if(matchA > matchB){
                comparison = 1;
            }else if( matchA < matchB){
                comparison = -1;
            }
            return comparison;
        }

        res.send(match.sort(compare));
        friends.push(req.body);
    })
};