let mongoose = require('mongoose');
const localConfig = require('../config');

const DEBUG = localConfig.application.DEBUG;

const vm = this;
vm.db = undefined;


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

    function unsafeConnect() {
        const connectionConfig = `mongodb://${vm.config.host}:${vm.config.port}/${vm.config.name}`;

        mongoose.Promise = global.Promise;
        mongoose.connect(connectionConfig);

        mongoose.connection.on('error', () => console.error(`[ERROR]: Error during connection to ${connectionConfig}`));

        DEBUG && mongoose.connection.on('open', () => {
            console.log(`[DEBUG]: Successfully connected to ${connectionConfig}`);
        });

        mongoose.connection.on('open', () => {
            vm.db = mongoose.connection;
            callback && callback();
        });

    }

    if(mongoose.connection.readyState === 1 ||     // 1 - connecting
       mongoose.connection.readyState === 2 ) {    // 2 - connected
        // Do nothing because we already connected
        callback && callback();
    } else {
        unsafeConnect(callback);
    }
};

/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {

    if(data.collections instanceof Array) {
        console.error(`Try to init ${data.collections.length}`);

        data.collections.forEach(function (element) {
            vm.db.collection(element.name).insert(element.rows, function (err) {
                err && console.error(`[ERROR]: Error during inserting ${element.rows.length} elements to ${element.name} collection`);
                DEBUG && !err && console.error(`[INFO] : Success inserting ${element.rows.length} elements to ${element.name} collection`);
            });
        });
    }

    callback && callback();
};


/**
 * Clear authors collection
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
function clearAuthors(callback) {
    vm.db.db.listCollections({name: 'authors'})
        .next(function(err, collinfo) {
            if (collinfo) {
                vm.db.collection('authors').drop( function(err) {
                    DEBUG && err && console.error(`[ERROR]: Error during dropping authors collection: ${err}`);
                    DEBUG && !err && console.error(`[INFO] : Success dropping authors collection`);
                });
            }

            callback && callback();
        });
}


/**
 * Clear books collection
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
function clearBooks(callback) {
    vm.db.db.listCollections({name: 'books'})
        .next(function (err, collinfo) {
            if (collinfo) {
                vm.db.collection('books').drop(function (err) {
                    DEBUG && err && console.error(`[ERROR]: Error during dropping books collection: ${err}`);
                    DEBUG && !err && console.error(`[INFO] : Success dropping books collection`);
                });
            }

            callback && callback();
        });
}


/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {

    clearAuthors(() => {
        clearBooks(() => {
            callback && callback();
        })
    })
};

module.exports = DAO;