// As a consumer, I want to create an upgrade, so that I can specify the initial state of the database for a given version number
// As a consumer, I want to specify the unique version number (integer) for the upgrade, so that each version has specific structure and data
// As a consumer, I want to specify the collections for the upgrade, so that the current database at this upgrade version will have the specified collections.
// As a consumer, I want to be able to specify documents (objects) to create in the collections when the upgrade is applied, so that i can create initial objects in the database.

describe('Upgrade', function () {
    var Upgrade;
    var upgrade;

    beforeEach(function() {
        Upgrade = require('../src/upgrade');
    });

    it('should require a version', function () {
        expect( function(){new Upgrade().toThrow(jasmine.any.exception)});
    });
});




