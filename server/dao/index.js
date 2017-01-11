const vm = this;
const mongoose = require('mongoose');
const Author = require('../models/author.js');
let db = undefined;


/**
 * Data Access Layer
 *
 * @constructor
 */
function DAO() {}


/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {

    let author = new Author({
        firstName: 'Maxim',
        secondName: 'Lysakov',
        birthDate: new Date('October 09, 1996 00:00:00')
    });

    author.save(function() {
        console.log('ok');
    });

    //TODO create instance and load data
    callback && callback();
};

/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {
    //TODO clear database
    db.collectionNames(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
    });

    callback && callback();
};

module.exports = DAO;