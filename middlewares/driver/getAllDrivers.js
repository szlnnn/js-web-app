var requireOption = require('../common').requireOption;
/**
 * Gets a list of all the drivers and puts it on res.locals.drivers
 *  -if there are no drivers, redirect to home page
 */

module.exports = function (objectrepository) {

    var driverModel = requireOption(objectrepository,'driverModel');
    return function (req, res, next) {
        driverModel.find({},function(err,results){
           if (err) {
               return next(err);
           }
           res.locals.drivers = results;
            return next();
        });

    };

};