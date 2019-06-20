var express = require('express');
var friends = require('../data/friends');

var router = express.Router();

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(friends.friends);
    });

    app.post('/api/friends', function(req, res){
        friends.friends.push(req.body);
    })
}