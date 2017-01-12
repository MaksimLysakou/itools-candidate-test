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
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../web/index.html'));
});
app.use('/api/authors', authors);
app.use('/api/books', books);


/**
 * Init database
 */

// connect -> clear -> init

const initData = [
    {
        name: "authors",
        rows: [
            {
                "_id" : "1",
                "email" : "test1@example.com",
                "firstName" : "First",
                "secondName" : "Author",
                "book" : [
                    "1",
                    "2"
                ],
                "birthDate" : new Date("December 01, 2001")
            },
            {
                "_id" : "2",
                "email" : "test2@example.com",
                "firstName" : "Second",
                "secondName" : "Author",
                "book" : [
                    "2"
                ],
                "birthDate" : new Date("December 01, 2002")
            },
            {
                "_id" : "3",
                "email" : "test3@example.com",
                "firstName" : "Third",
                "secondName" : "Author",
                "book" : [
                    "1",
                    "2",
                    "3"
                ],
                "birthDate" : new Date("December 01, 2003")
            },
            {
                "_id" : "4",
                "email" : "test4@example.com",
                "firstName" : "Fourth",
                "secondName" : "Author",
                "book" : [
                    "3",
                    "2"
                ],
                "birthDate" : new Date("December 01, 2004")
            },
            {
                "_id" : "5",
                "email" : "test5@example.com",
                "firstName" : "Fifth",
                "secondName" : "Author",
                "book" : [
                    "4"
                ],
                "birthDate" : new Date("December 01, 2004")
            }
        ]
    },
    {
        name: "books",
        rows: [
            {
                "_id" : "1",
                "name" : "Book 1",
                "author" : [
                    "1",
                    "3"
                ],
                "publishing" : "O'Reilly",
                "ebook" : true,
                "year" : 2016,
                "isbn" : "123-345-678",
                "pages" : 657
            },
            {
                "_id" : "2",
                "name" : "Book 2",
                "author" : [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "publishing" : "Williams",
                "ebook" : false,
                "year" : 2015,
                "isbn" : "321-543-876",
                "pages" : 1850
            },
            {
                "_id" : "3",
                "name" : "Book 3",
                "author" : [
                    "3",
                    "4"
                ],
                "publishing" : "Williams",
                "ebook" : true,
                "year" : 2017,
                "isbn" : "111-222-333",
                "pages" : 124
            },
            {
                "_id" : "4",
                "name" : "Book 4",
                "author" : [
                    "5"
                ],
                "publishing" : "O'Reilly",
                "ebook" : false,
                "year" : 2017,
                "isbn" : "556-872-637",
                "pages" : 215
            }
        ]
    }
];
dao.connect(
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