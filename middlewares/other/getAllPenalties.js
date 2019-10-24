var requireOption = require('../common').requireOption;
/**
 * Gets all the available penalties in the system and puts them on res.locals.penalties
 */

module.exports = function (objectrepository) {

    var carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        res.locals.penalties = [
            {
                _id: 'p1',
                name: 'speeding',
                points: '6'
            },
            {
                _id: 'p2',
                name: 'parking',
                points: '2'
            }
        ];
        return next();
    };

};