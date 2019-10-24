var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./routes/routes')(app);


var server = app.listen(3000, function () {
    console.log('Listening on port 3000');
});
