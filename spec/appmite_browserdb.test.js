describe('appmite-browserdb', function () {
    Database = require('../src/database');
    Upgrade = require('../src/upgrade');

    it('should be able to create an instance of Database', function () {
        database = new Database('dbname',1, [{version: 1}]);
        expect(typeof(Database)).toEqual('function');
    });
    it('should be able to create an instance of Upgrade', function () {
        upgrade = new Upgrade(1);
        expect(typeof(Upgrade)).toEqual('function');
    });
});
