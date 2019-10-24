var requireOption = require('../common').requireOption;
/**
* Create the car object if necessary data is available
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository,'carModel');
    return function (req, res, next) {
        if ((typeof req.body.selectOwner === 'undefined') || (typeof req.body.plate ==='undefined')
            || (req.body.selectOwner ==='') || (req.body.plate === '')) {
            return next();
        }

        var car = new carModel();
        car.make = req.body.make;
        car.model = req.body.model;
        car.license = req.body.plate;
        car._driver = res.locals.owner;
        car.save(function(err){
            console.log(err);
        });
        res.redirect('/item/view')    };

};