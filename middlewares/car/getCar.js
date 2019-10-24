var requireOption = require('../common').requireOption;
/**
 * Get the car for the carid param and put it on res.local.car
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository,'carModel');
    return function (req, res, next) {

        carModel.findById( { _id: req.param('carid')}).populate('_driver').exec(function (err,result){
            if (err) {
                return next(err);
            }
            res.locals.car = result;
            return next();
        });
    };

};