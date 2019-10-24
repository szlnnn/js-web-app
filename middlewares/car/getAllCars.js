var requireOption = require('../common').requireOption;
/**
 * Gets all cars and puts them on res.locals.cars
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository,'carModel');
    return function (req, res, next) {
        carModel.find().populate('_driver').exec(function(err,results){
            if (err) {
                return next(err);
            }
            res.locals.cars = results;
            return next();
        });

    };
};