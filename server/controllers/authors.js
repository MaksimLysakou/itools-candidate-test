'use strict';

/**
 * Send array of authors entities
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthors(req, res) {
    var authors = {
        authors: [
            {
                'email': 'testmail@mail.ru',
                'firstName': 'test',
                'secondName': 'test',
                'book': 'test',
                'birthDate': '1.1.16',
                '_id': '1'
            },
            {
                'email': 'testmail1@mail.ru',
                'firstName': 'test1',
                'secondName': 'test1',
                'book': 'test1',
                'birthDate': '2.1.16',
                '_id': '2'
            }
        ]
    };

    res.json(authors);
}

/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthorById(req, res) {
    //TODO implement
    res.send('');
}

module.exports = {
    getAuthors,
    getAuthorById
};

//TODO add other methods