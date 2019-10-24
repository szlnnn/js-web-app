var requireOption = require('../common').requireOption;
/**
 * Get the driver for the driverid param and puts it on res.locals.driver
 *      -if no driver is found redirect to home page
 */

module.exports = function (objectrepository) {

    var driverModel = requireOption(objectrepository,'driverModel');
    return function (req, res, next) {
        driverModel.findOne({
            _id: req.param('driverid')
        }, function (err,result){
            if (err) {
                return next(err);
            }
            res.locals.driver = result;
            return next();
        });
    };

};