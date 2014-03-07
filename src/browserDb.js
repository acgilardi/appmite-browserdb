var _ = require('./underscore');

module.exports = function (dbName, dbVersion) {

    // handle invalid arguments
    if (typeof dbName === 'undefined') {
        throw new Error('dbName is required');
    }
    if (typeof dbVersion === 'undefined') {
        throw new Error('dbVersion is required');
    }
    if(dbVersion < 1) {
        throw new Error('dbVersion is required to be 1 or greater');
    }
};


