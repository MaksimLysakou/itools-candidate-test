'use strict';
const authorsDAO = require('../dao/author');

/**
 * Send array of authors entities
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthors(req, res) {

    authorsDAO.getAuthors( (err, result) => {
        res.json(result);
    });
}


/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthorById(req, res) {

    authorsDAO.getAuthorById( req.params.id, ( err, result) => {

        if(err || !result) {
            res.status(404)
                .json({
                    errors: [ 'Author not exist' ]
                });
        } else {
            res.json(result);
        }
    });
}


/**
 * Update specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function updateAuthor(req, res) {

    authorsDAO.updateAuthor( req.params.id, req.body.author, ( err, result) => {

        if(err || !result) {
            res.status(404)
                .json({
                    errors: [ 'Author not exist' ]
                });
        } else {
            res.json({ author: result });
        }
    });
}


/**
 * Edit specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function editAuthor(req, res) {

}


/**
 * Create specific author entity
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function addAuthor(req, res) {
    if(!req.body.email) {
        res.status(400)
            .json({ "errors" : ["E-mail is require"] });
        return;
    }

    authorsDAO.createAuthor( req.body,  (err, result) => {
        if(!err && result) {
            res.status(201).json({ "author" : result });
        } else {
            res.status(400)
                .json({ "errors" : ["Author with this id already exist"] });
        }
    });
}


/**
 * Remove specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function removeAuthor(req, res) {

}


module.exports = {
    getAuthors,
    getAuthorById,
    updateAuthor,
    editAuthor,
    addAuthor,
    removeAuthor
};
