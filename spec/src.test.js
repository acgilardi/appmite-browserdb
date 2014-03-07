describe('appmite-browserdb', function () {

    var BrowserDb;

    beforeEach(function() {
        BrowserDb = require('../src/browserDb');
    });

    it('should be a module', function () {
        browserDb = new BrowserDb('dbname',1);
        expect(typeof(BrowserDb)).toEqual('function');
    });

    describe('Database', function () {

        it('should be able to create an instance', function () {
            browserDb = new BrowserDb('dbname',1, [{version: 1}]);
            expect(browserDb instanceof BrowserDb).toBeTruthy();
        });
        it('should require a name', function () {
            expect( function(){new BrowserDb(undefined,1, [{version: 1}]);} ).toThrow(jasmine.any.exception);
        });
        it('should require a version', function () {
            expect( function(){new BrowserDb('dbName',undefined,[{version: 1}]);} ).toThrow(jasmine.any.exception);
        });
        it('should not allow a version lower than 1', function () {
            expect( function(){new BrowserDb('dbName',-1);}).toThrow(jasmine.any.exception);
        });
//        it('should require at least one update', function () {
//
//        });
    });

});

