const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
const Author = require('./author.js');

const Schema = mongoose.Schema;


var Book = Schema({
    name : { type: String, required: true },
    publishing : { type: String, required: true },
    ebook : { type: Boolean, required: true },
    year : { type: Number, required: true },
    isbn : { type: String, required: true },
    pages : { type: Number, required: true },
    author: [{ type:Schema.ObjectId, ref:"Author", childPath:"book" }]
});
Book.plugin(relationship, { relationshipPathName:'author' });

module.exports = mongoose.model('Book', Book);
