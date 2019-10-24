var requireOption = require('../common').requireOption;
/**
 * Delete the driver object 
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository,'carModel');

    return function (req, res, next) {
        if (typeof res.locals.driver === 'undefined') {
            return next();
        }
        carModel.find({"_driver": res.locals.driver._id}).remove().exec();
        res.locals.driver.remove(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/item/view') ;
        });

    };

};