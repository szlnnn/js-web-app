var requireOption = require('../common').requireOption;
/**
 * Updates the car object with new values
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if ((typeof req.body.selectOwner === 'undefined') || (typeof req.body.plate ==='undefined')
            || (req.body.selectOwner ==='') || (req.body.plate === '')) {
            return next();
        }

        res.locals.car.make = req.body.make;
        res.locals.car.model = req.body.model;
        res.locals.car.license = req.body.plate;
        res.locals.car._driver = res.locals.owner;
        res.locals.car.save(function(err){
            console.log(err);
        });
        res.redirect('/item/view')    };

};