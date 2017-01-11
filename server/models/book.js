const mongoose = require('mongoose');
const mongooseAutoincrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;


var Book = Schema({
    name : { type: String, required: true },
    publishing : { type: String, required: true },
    ebook : { type: Boolean, required: true },
    year : { type: Number, required: true },
    isbn : { type: String, required: true },
    pages : { type: Number, required: true }
});
//,
//author : [{ type: Schema.Types.ObjectId, ref: 'Author' }]

module.exports = mongoose.model('Book', Book);
