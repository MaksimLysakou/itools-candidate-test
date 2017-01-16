'use strict';
const Author = require('../models/author.js');
const mongoose = require('mongoose');

module.exports =  (function () {

    /**
     * Get array of author entities
     * @param {Function} callback - two params err, callback result
     * @returns {void}
     */
    function getAuthors(callback) {
        Author.find({}, (err, result) => {
            console.error(`[RES]  : Result of getting all authors:`, JSON.stringify(result));
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
            console.error(`[RES]  : Result of getting author with id ${query._id}: ${result}`);
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
        if(author == undefined) {

            callback && callback('Author is require', {});
            return;
        }

        if(author.email == undefined) {

            callback && callback('E-mail is require', {});
            return;
        }

        if( Author.find({ _id: author._id }) ) {

            callback && callback('Author with this id already exist', {});
            return;
        }

        Author.insert(author, (err, result) => {
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

        Author.update(query, author, (err, result) => {
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

        Author.remove(query, (err, result) => {
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