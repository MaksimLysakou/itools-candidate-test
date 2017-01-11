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
dao.init({/*init data*/}, (err) => {

    if (err) {
        console.error(err);
    }
    /**
     * Start app
     */
    app.listen(localConfig.application.port, function () {
        console.log(`[INFO] : App listening on port ${localConfig.application.port}!`);
    });
});

module.exports = app;