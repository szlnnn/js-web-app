var requireOption = require('../common').requireOption;
/**
 * Creates a new police record in the db or updates the driver`s penalty points if he already exists in the db
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if ((typeof req.body.selectOwner === 'undefined') || (typeof req.body.selectPenalty ==='undefined')
            || (req.body.selectOwner ==='') || (req.body.selectPenalty === '')) {
            return next();
        }
        var points = req.body.selectPenalty.replace(/(^\d+)(.+$)/i,'$1');
        res.locals.owner.points += Number(points);
        res.locals.owner.save(function(err){
            console.log(err);
        });
        res.redirect('/penalty')
    };

};