var Schema = require('mongoose').Schema;
var db = require('../db/db');

var Driver = db.model('Driver', {
    name: {
        type: String,
        unique: [true, "This username is taken."]
    },
    license: String,
    points: Number
});

module.exports = Driver;