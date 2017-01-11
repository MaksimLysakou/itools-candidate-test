const vm = this;
const mongoose = require('mongoose');
const localConfig = require('../config');
const Author = require('../models/author.js');
const Book = require('../models/book.js');


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
    const connectionConfig = `mongodb://${vm.config.host}:${vm.config.port}/${vm.config.database}`;

    mongoose.Promise = global.Promise;
    mongoose.connect(connectionConfig);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    if(localConfig.application.DEBUG === true) {
        db.on('open', function () {
            console.log(`[DEBUG]: Successfully connected to ${connectionConfig}`)
        })
    }

    /**
     * Entities creation
     */

    let firstAuthor = new Author({
        firstName : "Petka",
        secondName : "vasiliev",
        birthDate : new Date('December 12, 1996'),
    });

    let secondAuthor = new Author({
        firstName : "Maxim",
        secondName : "Lysakov",
        birthDate : new Date('October 09, 1996'),
    });

    firstAuthor.save();
    secondAuthor.save();

    let perfectBook = new Book({
        name : "Best book ever!",
        publishing : "Moskow best publishing",
        ebook : false,
        year : 2017,
        isbn : "Sorry, what?",
        pages : 10000
    });

    perfectBook.author.push(firstAuthor);
    perfectBook.author.push(secondAuthor);

    perfectBook.save();





    callback && callback();
};

/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {
    //TODO clear database

    callback && callback();
};

module.exports = DAO;