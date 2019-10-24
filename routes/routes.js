const getDriverMW = require('../middlewares/driver/getDriver');
const getAllDriversMW = require('../middlewares/driver/getAllDrivers');
const newDriverMW = require('../middlewares/driver/newDriver');
const updateDriverMW = require('../middlewares/driver/updateDriver');
const deleteDriverMW = require('../middlewares/driver/deleteDriver');

const getCarMW = require('../middlewares/car/getCar');
const getOwnerMW = require('../middlewares/car/getOwner');
const newCarMW = require('../middlewares/car/newCar');
const updateCarMW = require('../middlewares/car/updateCar');
const deleteCarMW = require('../middlewares/car/deleteCar');
const getAllCars = require('../middlewares/car/getAllCars');

const renderMW = require('../middlewares/other/render');
const getAllPenaltiesMW = require('../middlewares/other/getAllPenalties');
const redirectMW = require('../middlewares/other/redirect');
const savePoliceRecordMW = require('../middlewares/other/savePoliceRecord');

var driverModel = require('../model/driverModel');
var carModel = require('../model/carModel');


module.exports = function (app) {
    const objectrepository = {
        driverModel: driverModel,
        carModel: carModel,

    };

    app.get('/',
        redirectMW(objectrepository));

    app.use('/penalty',
        getAllDriversMW(objectrepository),
        getAllCars(objectrepository),
        getAllPenaltiesMW(objectrepository),
        getOwnerMW(objectrepository),
        savePoliceRecordMW(objectrepository),
        renderMW(objectrepository,'penalty'));

    app.use('/penalty/new',
        getDriverMW(objectrepository),
        savePoliceRecordMW(objectrepository),
        renderMW(objectrepository,'penalty'));

    app.use('/additem',
        getAllDriversMW(objectrepository),
        newDriverMW(objectrepository),
        getOwnerMW(objectrepository),
        newCarMW(objectrepository),
        renderMW(objectrepository, 'addcarsandpeople'));

    app.use('/item/view',
        getAllDriversMW(objectrepository),
        getAllCars(objectrepository),
        renderMW(objectrepository, 'viewcarsandpeople'));

    app.use('/item/getcar/edit/:carid',
        getCarMW(objectrepository),
        getAllDriversMW(objectrepository),
        getOwnerMW(objectrepository),
        updateCarMW(objectrepository),
        renderMW(objectrepository,'editcar'));

    app.get('/item/getcar/delete/:carid',
        getCarMW(objectrepository),
        deleteCarMW(objectrepository),
        renderMW(objectrepository,'viewcarsandpeople'));

    app.use('/item/getdriver/edit/:driverid',
        getDriverMW(objectrepository),
        updateDriverMW(objectrepository),
        renderMW(objectrepository,'editdriver'));

    app.get('/item/getdriver/delete/:driverid',
        getDriverMW(objectrepository),
        deleteDriverMW(objectrepository),
        renderMW(objectrepository,'viewcarsandpeople'));
};
