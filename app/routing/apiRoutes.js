var express = require('express');
var friends = require('../data/friends');

var router = express.Router();

module.exports = function(app){
    app.get('/api/all', function(req, res) {
        res.json(friends.friends);
    })
}