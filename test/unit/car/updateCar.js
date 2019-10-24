var expect = require('chai').expect;
var updateCarMW = require('../../../middlewares/car/updateCar');

describe('updateCar MW',function(){
        it('should update car object ',function(done){
                var req = {
                        body: {
                                selectOwner: 'Gyuri',
                                plate: '111-aaa',
                                make: 'VW',
                                model: 'Golf'
                        }
                };
                var res = {
                        locals: {
                               car : {
                                       make: '',
                                       model: '',
                                       license: '',
                                       _driver: '',
                                       save: function(){}
                               },
                                owner: 'Gyuri'

                        },

                        redirect: function(){
                                expect(res.locals.car.make).to.eql('VW');
                                expect(res.locals.car.license).to.eql('111-aaa');
                                expect(res.locals.car.model).to.eql('Golf');
                                expect(res.locals.car._driver).to.eql('Gyuri');
                                done();}
                };
                updateCarMW({})(req,res,function (done){
                        //done();
                });
        });
        it('should call next if owner is undefined',function(done){
                var req = {
                        body: {
                                plate: '111-aaa',
                                make: 'VW',
                                model: 'Golf'
                        }
                };
                var res = {};
                updateCarMW({})(req,res,function (){
                        done();
                });
        });
        it('should call next if owner is empty',function(done){
                var req = {
                        body: {
                                plate: '111-aaa',
                                make: 'VW',
                                model: 'Golf',
                                selectOwner: ''
                        }
                };
                var res = {};
                updateCarMW({})(req,res,function (){
                        done();
                });
        });
        it('should call next if plate is empty',function(done){
                var req = {
                        body: {
                                plate: '',
                                make: 'VW',
                                model: 'Golf',
                                selectOwner: 'Gyuri'
                        }
                };
                var res = {};
                updateCarMW({})(req,res,function (){
                        done();
                });
        });
        it('should call next if plate is undefined',function(done){
                var req = {
                        body: {
                                make: 'VW',
                                model: 'Golf',
                                selectOwner: 'Gyuri'
                        }
                };
                var res = {};
                updateCarMW({})(req,res,function (){
                        done();
                });
        });
});

