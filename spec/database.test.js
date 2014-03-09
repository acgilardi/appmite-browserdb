describe('Database', function () {
    var Database;

    beforeEach(function() {
        Database = require('../src/database');
    });

    it('should be able to create an instance', function () {
        database = new Database('dbname',1, [{version: 1}]);
        expect(database instanceof Database).toBeTruthy();
    });
    it('should require a name', function () {
        expect( function(){new Database(undefined,1, [{version: 1}]);} ).toThrow(jasmine.any.exception);
    });
    it('should require a version', function () {
        expect( function(){new Database('dbName',undefined,[{version: 1}]);} ).toThrow(jasmine.any.exception);
    });
    it('should not allow a version lower than 1', function () {
        expect( function(){new Database('dbName',-1);}).toThrow(jasmine.any.exception);
    });
    it('should require at least one update', function () {
        expect( function(){new Database('dbName',1,[]); }).toThrow(jasmine.any.exception);
    });
    it('should apply force new if parameter is passed', function () {
        spyOn(Database.prototype,'forceNew');
        database = new Database('dbname',1, [{version: 1}], true);
        expect(Database.prototype.forceNew).toHaveBeenCalled();
    });
//    it('should provide each collection as an object', function () {
//        var updates = [
//            {version: 1, collections:['category','']}
//        ];
//        database = new Database('dbname',1, options, true);
//    });
});


