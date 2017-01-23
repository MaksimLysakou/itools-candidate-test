'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const DAO = require('./dao');
const authors = require('./routes/authors');
const books = require('./routes/books');

const localConfig = require('./config');

const app = express();
const dao = new DAO(localConfig.connection);


/**
 * Middleware
 */

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


/**
 * Routes
 */

app.use('/api/authors', authors);
app.use('/api/books', books);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/authors', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/books', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


/**
 * Init database
 */
const initData = {
    collections : [
            {
                name: "authors",
                rows: [
                    {
                        "_id" : "1222",
                        "email" : "test1@example.com",
                        "firstName" : "First",
                        "secondName" : "Author",
                        "book" : [
                            "1222",
                            "2222"
                        ],
                        "birthDate" : new Date("December 01, 2001")
                    },
                    {
                        "_id" : "2222",
                        "email" : "test2@example.com",
                        "firstName" : "Second",
                        "secondName" : "Author",
                        "book" : [
                            "2222"
                        ],
                        "birthDate" : new Date("December 01, 2002")
                    },
                    {
                        "_id" : "3222",
                        "email" : "test3@example.com",
                        "firstName" : "Third",
                        "secondName" : "Author",
                        "book" : [
                            "1222",
                            "2222",
                            "3222"
                        ],
                        "birthDate" : new Date("December 01, 2003")
                    },
                    {
                        "_id" : "4222",
                        "email" : "test4@example.com",
                        "firstName" : "Fourth",
                        "secondName" : "Author",
                        "book" : [
                            "3222",
                            "2222"
                        ],
                        "birthDate" : new Date("December 01, 2004")
                    },
                    {
                        "_id" : "5222",
                        "email" : "test5@example.com",
                        "firstName" : "Fifth",
                        "secondName" : "Author",
                        "book" : [
                            "4222"
                        ],
                        "birthDate" : new Date("December 01, 2004")
                    }
                ]
            },
            {
                name: "books",
                rows: [
                    {
                        "_id" : "1222",
                        "name" : "Book 1",
                        "author" : [
                            "1222",
                            "3222"
                        ],
                        "publishing" : "O'Reilly",
                        "ebook" : true,
                        "year" : 2016,
                        "isbn" : "123-345-678",
                        "pages" : 657
                    },
                    {
                        "_id" : "2222",
                        "name" : "Book 2",
                        "author" : [
                            "1222",
                            "2222",
                            "3222",
                            "4222"
                        ],
                        "publishing" : "Williams",
                        "ebook" : false,
                        "year" : 2015,
                        "isbn" : "321-543-876",
                        "pages" : 1850
                    },
                    {
                        "_id" : "3222",
                        "name" : "Book 3",
                        "author" : [
                            "3222",
                            "4222"
                        ],
                        "publishing" : "Williams",
                        "ebook" : true,
                        "year" : 2017,
                        "isbn" : "111-222-333",
                        "pages" : 124
                    },
                    {
                        "_id" : "4222",
                        "name" : "Book 4",
                        "author" : [
                            "5222"
                        ],
                        "publishing" : "O'Reilly",
                        "ebook" : false,
                        "year" : 2017,
                        "isbn" : "556-872-637",
                        "pages" : 215
                    }
                ]
            }
    ]
};
dao.connect().then(
    () => dao.clear(
    () => dao.init(initData, (err) => {

    if (err) {
        console.error(err);
    }
    /**
     * Start app
     */
    app.listen(localConfig.application.port, function () {
        console.log(`[INFO] : App listening on port ${localConfig.application.port}!`);
    });
})));

module.exports = app;