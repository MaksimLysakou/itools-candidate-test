'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const DAO = require('./dao');
const authors = require('./routes/authors');
const books = require('./routes/books');
const config = require('./config');

const Author = require('./models/author');

const PORT = 3000;

const DEBUG = true;

const app = express();
const dao = new DAO();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/adminPage');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
vm.db = mongoose.createConnection();
vm.db.open(config.host, config.name, config.port);



let test = new Author({ firstName : "a",
                        secondName : "b",
                        birthDate: new Date() });

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
dao.init({/*init data*/}, (err, db) => {

    if (err) {
        console.error(err);
    }
    /**
     * Start app
     */
    app.listen(PORT, function () {
        console.log(`App listening on port ${PORT}!`);
    });
});

module.exports = app;