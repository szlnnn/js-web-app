/**
 * User is redirected to /penalty if he accesses / page
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.redirect('/item/view')     };

};