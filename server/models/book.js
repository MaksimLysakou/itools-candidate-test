const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let Book = Schema({
    _id: { type: String, unique: true, required: true },
    name : { type: String, required: true },
    publishing : { type: String, required: true },
    ebook : { type: Boolean, required: true },
    year : { type: Number, required: true },
    isbn : { type: String, required: true },
    pages : { type: Number, required: true },
    author: [{ type: Number }]
});

module.exports = mongoose.model('Book', Book);
