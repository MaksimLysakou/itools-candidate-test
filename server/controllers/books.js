'use strict';
const booksDAO = require('../dao/book');

/**
 * Send array of books entities
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getBooks(req, res) {

    booksDAO.getBooks( (err, result) => {
        res.json({ books: result });
    });
}


/**
 * Send specific Bbook entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getBookById(req, res) {

    booksDAO.getBookById( req.params.id, ( err, result) => {

        if(err || !result) {
            res.status(404)
                .json({
                    errors: [ 'Book not exist' ]
                });
        } else {
            res.json({ book: result });
        }
    });
}


/**
 * Update specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function updateBook(req, res) {

    if(!req.body.name) {
        res.status(400).json({ errors: ["Name is require"] });
        return;
    }

    booksDAO.updateBook( req.params.id, req.body, ( err, result) => {

        if(err && err.code == 66) {
            res.status(400)
                .json({
                    errors: ['Book with this id already exist']
                });
            return;
        }

        if(!result) {
            res.status(404)
                .json({
                    errors: [ 'Book not exist' ]
                });
        } else {
            res.json({ book: result });
        }
    });

}


/**
 * Edit specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function editBook(req, res) {
    if((req.body.email && req.body.email.length == 0) ||
        (('name' in req.body) && !req.body.name)) {
        res.status(400).json({ errors: ["Name is require"] });
        return;
    }

    booksDAO.updateBook( req.params.id, req.body, ( err, result) => {

        if(err && err.code == 66) {
            res.status(400)
                .json({
                    errors: ['Book with this id already exist']
                });
            return;
        }

        if(!result) {
            res.status(404)
                .json({
                    errors: [ 'Book not exist' ]
                });
        } else {
            res.json({ book: result });
        }
    });
}


/**
 * Create specific book entity
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function addBook(req, res) {
    if(!req.body.name) {
        res.status(400)
            .json({ "errors" : ["Name is require"] });
        return;
    }

    booksDAO.createBook( req.body,  (err, result) => {
        if(!err && result) {
            res.status(201).json({ "book" : result });
        } else {
            res.status(400)
                .json({ "errors" : ["Book with this id already exist"] });
        }
    });
}


/**
 * Remove specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function removeBook(req, res) {
    booksDAO.removeBook(req.params.id, (err, result) => {
        if(err) {
            res.status(400).json("Error");
        }
        if(!result) {
            res.status(404)
                .json({
                    errors: [ 'Book not exist' ]
                });
        } else {
            res.json({ status: "OK" });
        }
    });
}


module.exports = {
    getBooks,
    getBookById,
    updateBook,
    editBook,
    addBook,
    removeBook
};
