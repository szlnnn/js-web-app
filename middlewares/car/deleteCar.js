var requireOption = require('../common').requireOption;
/**
 * Delete the car object
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof res.locals.car === 'undefined') {
            return next();
        }
        res.locals.car.remove(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/item/view') ;
        });

    };

};