var requireOption = require('../common').requireOption;
/**
 * Updates the driver object with new values
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if ((req.body.dlicense ==='') || (req.body.dname === '')
            || (typeof  req.body.dlicense === 'undefined') || (typeof  req.body.dname === 'undefined')) {
            return next();
        }
        res.locals.driver.name = req.body.dname;
        res.locals.driver.license = req.body.dlicense;
        res.locals.driver.save(function(err){
            console.log(err);
        });
        res.redirect('/item/view')
    };

};