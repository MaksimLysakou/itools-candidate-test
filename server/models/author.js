const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
const Book = require('./book.js');

const Schema = mongoose.Schema;


let Author = Schema({
    firstName : { type: String, required: true },
    secondName : { type: String, required: true },
    birthDate : { type: Date, required: true },
    book : [{ type:Schema.ObjectId, ref:'Book', childPath:'author' }]
});

Author.plugin(relationship, { relationshipPathName:'book' });

module.exports = mongoose.model('Author', Author);
