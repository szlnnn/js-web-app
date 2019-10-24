/**
 * Using the template engine render the values into the template
 * --copied--
 */

const requireOption = require('../common').requireOption;

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        var current = new Date();
        var copy = new Date(current.getTime() - 86400000);
        console.log(copy);
        res.render(viewName, res.locals);
        //console.log('render: ' + viewName);
        //res.end('Template: ' + viewName);
        //console.log(req.body);
    };

};