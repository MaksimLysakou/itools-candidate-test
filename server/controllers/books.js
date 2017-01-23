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
        res.json(result);
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
        res.json(result);
    });
}


/**
 * Update specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function updateBook(req, res) {
    booksDAO.getBookById( req.params.id, ( err, result) => {
        res.json(result);
    });
}


/**
 * Edit specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function editBook(req, res) {

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
    booksDAO.removeBook( req.params.id, (err, result) => {
        if(!err && result) {
            res.json({ status : "OK" });
        } else {
            res.status(404)
               .json({ errors: ["Book not exist"] });
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
