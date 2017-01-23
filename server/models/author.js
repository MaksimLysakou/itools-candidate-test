const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
const Book = require('./book.js');

const Schema = mongoose.Schema;


let Author = Schema({
    _id: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    firstName : { type: String, required: true },
    secondName : { type: String, required: true },
    birthDate : { type: Date, required: true },
    book : [{ type: Number }]
});

module.exports = mongoose.model('Author', Author);
