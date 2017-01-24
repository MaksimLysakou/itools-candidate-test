'use strict';
const Author = require('../models/author.js');

module.exports =  (function () {

    /**
     * Get array of author entities
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function getAuthors(callback) {
        Author.find({}, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Get author entity by id
     * @param {Number} id - Unique author identifier
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function getAuthorById(id, callback) {
        const query = {_id : id};

        Author.findOne(query, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Get author entity by id
     * @param {Number} author - Author entity
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function createAuthor(author, callback) {

        Author.create(author, (err, result) => {
            callback && callback(err, result);
        });
    }


    /**
     * Update author entity by id
     * @param {Number} id - Unique author identifier
     * @param {Object} author - New author entity
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function updateAuthor(id, author, callback) {

        const query = { '_id' : id };

        Author.findOneAndUpdate(query, author, {new: true}, (err, result) => {
            callback && callback(err, result);
        });
    }

    /**
     * Remove author entity by id
     * @param {Number} id - Unique author identifier
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function removeAuthor(id, callback) {
        const query = { '_id' : id };

        Author.findOneAndRemove(query, (err, result) => {
            callback && callback(err, result);
        });
    }


    return {
        getAuthors,
        getAuthorById,
        createAuthor,
        updateAuthor,
        removeAuthor
    };
})();