var expect = require('chai').expect;
var savePoliceRecord = require('../../../middlewares/other/savePoliceRecord');

describe('savePoliceRecord MW',function(){
    it('should update driver points',function(done){
        var req = {
            body: {
                selectOwner: 'Gyuri',
                plate: '111-aaa',
                make: 'VW',
                model: 'Golf',
                selectPenalty: '6-parking'
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
                owner: {
                    points: 0,
                    save: function(){},

                }

            },

            redirect: function(){
                expect(res.locals.owner.points).to.eql(6);
                done();}
        };
        savePoliceRecord({})(req,res,function (done){
            //done();
        });
    });
    it('should call next if owner is undefined',function(done){
        var req = {
            body: {
                plate: '111-aaa',
                make: 'VW',
                model: 'Golf',
                selectPenalty: '6-parking'
            }
        };
        var res = {};
        savePoliceRecord({})(req,res,function (){
            done();
        });
    });
    it('should call next if owner is empty',function(done){
        var req = {
            body: {
                plate: '111-aaa',
                make: 'VW',
                model: 'Golf',
                selectOwner: '',
                selectPenalty: '6-parking'

            }
        };
        var res = {};
        savePoliceRecord({})(req,res,function (){
            done();
        });
    });
    it('should call next if penalty is empty',function(done){
        var req = {
            body: {
                plate: '',
                make: 'VW',
                model: 'Golf',
                selectOwner: 'Gyuri',
                selectPenalty: ''
            }
        };
        var res = {};
        savePoliceRecord({})(req,res,function (){
            done();
        });
    });
    it('should call next if penalty is undefined',function(done){
        var req = {
            body: {
                make: 'VW',
                model: 'Golf',
                selectOwner: 'Gyuri'
            }
        };
        var res = {};
        savePoliceRecord({})(req,res,function (){
            done();
        });
    });
});

