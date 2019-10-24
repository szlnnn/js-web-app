var requireOption = require('../common').requireOption;
/**
 * Create a new driver object
 */

module.exports = function (objectrepository) {

    var driverModel = requireOption(objectrepository,'driverModel');

    return function (req, res, next) {
        if ((typeof req.body.dname === 'undefined') || (typeof req.body.dlicense ==='undefined')
            || (req.body.dlicense ==='') || (req.body.dname === '')) {
            return next();
        }
        var driver = new driverModel();
        driver.name = req.body.dname;
        driver.license = req.body.dlicense;
        driver.points = 0;
        driver.save(function(err){
            console.log(err);
        });
        res.redirect('/item/view')
    };

};