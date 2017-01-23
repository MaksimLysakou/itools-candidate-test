'use strict';
const Book = require('../models/book.js');

module.exports =  (function () {

    /**
     * Get array of book entities
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function getBooks(callback) {
        Book.find({}, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Get book entity by id
     * @param {Number} id - Unique book identifier
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function getBookById(id, callback) {
        const query = {_id : id};

        Book.findOne(query, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Get book entity by id
     * @param {Number} book - Book entity
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function createBook(book, callback) {

        Book.create(book, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Update book entity by id
     * @param {Number} id - Unique book identifier
     * @param {Object} book - New book entity
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function updateBook(id, book, callback) {
        const query = { '_id' : id };

        Book.update(query, book, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Remove book entity by id
     * @param {Number} id - Unique book identifier
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function removeBook(id, callback) {
        const query = { '_id' : id };

        Book.findOneAndRemove(query, (err, result) => {
            callback && callback(err, result);
        });
    }


    return {
        getBooks,
        getBookById,
        createBook,
        updateBook,
        removeBook
    };
})();