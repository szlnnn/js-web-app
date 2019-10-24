var Schema = require('mongoose').Schema;
var db = require('../db/db');

var Car = db.model('Car', {
  _driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  },
  make: String,
  model: String,
  license: String,
});

module.exports = Car;