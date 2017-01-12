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
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {
    /**
     * DB connection
     */
    const connectionConfig = `mongodb://${vm.config.host}:${vm.config.port}/${vm.config.name}`;

    mongoose.Promise = global.Promise;

    if(mongoose.connection) {
        mongoose.connection.close(function (err) {
            mongoose.connect(connectionConfig);
            vm.db = mongoose.connection;

            vm.db.on('error', () => console.error(`[ERROR]: Error during connection to ${connectionConfig}`));

            localConfig.application.DEBUG && vm.db.on('open', () => {
                    console.log(`[DEBUG]: Successfully connected to ${connectionConfig}`);
                });
        });
    } else {
        const db = mongoose.connection;

        vm.db.on('error', () => console.error(`[ERROR]: Error during connection to ${connectionConfig}`));

        localConfig.application.DEBUG && vm.db.on('open', () => {
             console.log(`[DEBUG]: Successfully connected to ${connectionConfig}`);
        });
    }



    /**
     * Entities creation
     */

    let amazingBook = new Book({
        name : "Amazing book!",
        publishing : "Moskow best publishing",
        ebook : false,
        year : 2014,
        isbn : "111-222-333",
        pages : 123
    });

    let smallBook = new Book({
        name : "Too small book!",
        publishing : "Moskow best publishing",
        ebook : false,
        year : 2013,
        isbn : "331-222-333",
        pages : 10
    });

    amazingBook.save(() => smallBook.save( () => {
        let firstAuthor = new Author({
            firstName : "Nikolay",
            secondName : "Vasiliev",
            birthDate : new Date('December 28, 1944'),
        });

        firstAuthor.book.push(amazingBook);
        firstAuthor.book.push(smallBook);

        firstAuthor.save();
    }));




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