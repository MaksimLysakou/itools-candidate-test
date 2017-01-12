const mongoose = require('mongoose');
const localConfig = require('../config');
const Author = require('../models/author.js');
const Book = require('../models/book.js');

const vm = this;


/**
 * Data Access Layer
 *
 * @constructor
 * @param {Object} config - database config
 */
function DAO(config) {
    vm.config = config;
}

/**
 * Establish connection to database. If connection already exists reopen it.
 *
 * @param {Function} callback - two params err, callback result
 */
DAO.prototype.connect = function(callback) {
    /**
     * DB connection
     */
    const connectionConfig = `mongodb://${vm.config.host}:${vm.config.port}/${vm.config.name}`;

    mongoose.Promise = global.Promise;

    function unsafeConnect(callback) {
        mongoose.connect(connectionConfig);
        vm.db = mongoose.connection;

        vm.db.on('error', () => console.error(`[ERROR]: Error during connection to ${connectionConfig}`));

        localConfig.application.DEBUG && vm.db.on('open', () => {
            console.log(`[DEBUG]: Successfully connected to ${connectionConfig}`);
        });

        callback && callback();
    }

    if(mongoose.connection) {
        mongoose.connection.close(function (err) {
            err && console.error(`[ERROR]: Error during close connection`);
            unsafeConnect();
        });
    } else {
        unsafeConnect();
    }

    callback && callback();
}

/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {

    data && data.forEach(function (element) {
        mongoose.connection.collections[element.name].insert(element.rows, function(err) {
            err && console.error(`[ERROR]: Error during inserting ${element.rows.length} elements
                                                               to ${element.name} collection`);
        });
    });

    callback && callback();
};

/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {
    mongoose.connection.collections['authors'].drop( function(err) {
        err && console.error(`[ERROR]: Error during dropping authors collection`);
    });
    mongoose.connection.collections['books'].drop( function(err) {
        err && console.error(`[ERROR]: Error during dropping books collection`);
    });

    callback && callback();
};

module.exports = DAO;