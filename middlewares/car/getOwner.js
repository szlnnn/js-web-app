var requireOption = require('../common').requireOption;
/**
 * Get the owner of a car from the selectDriver param
 *      -if no owner is found redirect to home page
 */

module.exports = function (objectrepository) {

    var driverModel = requireOption(objectrepository,'driverModel');
    return function (req, res, next) {
        driverModel.findOne({
            "name": req.body.selectOwner
        }, function (err,result){
            if (err) {
                return next(err);
            }
            res.locals.owner = result;
            return next();
        });
    };

};