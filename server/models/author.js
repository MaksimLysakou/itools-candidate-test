const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = require('./book.js');

let Author = Schema({
    firstName : { type: String, required: true },
    secondName : { type: String, required: true },
    birthDate : { type: Date, required: true },
    book : [{ type:Schema.ObjectId, ref:"Book" }]
});

module.exports = mongoose.model('Author', Author);
