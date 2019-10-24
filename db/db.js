var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xbtvfy',{ useNewUrlParser: true });

module.exports = mongoose;