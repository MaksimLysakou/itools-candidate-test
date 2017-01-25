let mongoose = require('mongoose');
const localConfig = require('../config');

const DEBUG = localConfig.application.DEBUG;

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
DAO.prototype.connect = function() {
    /**
     * DB connection
     */
    return new Promise((resolve, reject) => {
        if(mongoose.connection.readyState === 1 ||     // 1 - connecting
           mongoose.connection.readyState === 2 ) {    // 2 - connected
            // Do nothing because we already connected
            resolve("Connected");
        } else {
            const connectionConfig = `mongodb://${vm.config.host}:${vm.config.port}/${vm.config.name}`;

            mongoose.Promise = global.Promise;
            mongoose.connect(connectionConfig);

            mongoose.connection.on('error', () => console.error(`[ERROR]: Error during connection to ${connectionConfig}`));

            DEBUG && mongoose.connection.on('open', () => {
                console.log(`[INFO] : Successfully connected to ${connectionConfig}`);
            });

            mongoose.connection.on('open', () => {
                vm.connection = mongoose.connection;
                resolve("Connected");
            });
        }
    });
};


/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {


    DAO.prototype.connect().then( () => {
        if (data.collections instanceof Array) {

            data.collections.forEach(function (element, index) {
                vm.connection.collection(element.name).insert(element.rows, (err) => {
                    err && console.error(`[ERROR]: Error during inserting ${element.rows.length} elements to ${element.name} collection`);
                    DEBUG && !err && console.log(`[INFO] : Success inserting ${element.rows.length} elements to ${element.name} collection`);

                    if(index === data.collections.length - 1){
                        callback && callback();
                    }
                });
            });
        }
    });
};


/**
 * Clear authors collection
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
function clearAuthors(callback) {
    vm.connection.db.listCollections({name: 'authors'})
        .next(function(err, collinfo) {
            if (collinfo) {
                vm.connection.collection('authors').drop( function(err) {
                    DEBUG && err && console.error(`[ERROR]: Error during dropping authors collection: ${err}`);
                    DEBUG && !err && console.log(`[INFO] : Success dropping authors collection`);

                    callback && callback();
                });
            }
            else {
                callback && callback();
            }
        });
}


/**
 * Clear books collection
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
function clearBooks(callback) {
    vm.connection.db.listCollections({name: 'books'})
        .next(function (err, collinfo) {
            if (collinfo) {
                vm.connection.collection('books').drop(function (err) {
                    DEBUG && err && console.error(`[ERROR]: Error during dropping books collection: ${err}`);
                    DEBUG && !err && console.log(`[INFO] : Success dropping books collection`);

                    callback && callback();
                });
            }
            else {
                callback && callback();
            }

        });
}


/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {

    DAO.prototype.connect().then( () => {
        clearAuthors(() => {
            clearBooks(() => {
                callback && callback();
            });
        });
    });
};

module.exports = DAO;