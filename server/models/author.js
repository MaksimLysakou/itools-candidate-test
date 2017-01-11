const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Author = Schema({
    firstName : { type: String, required: true },
    secondName : { type: String, required: true },
    birthDate : { type: Date, required: true }
});
//,
//book : [{ type: Schema.Types.ObjectId, ref: BookSchema }]

module.exports = Author; //db.model('Author', Author);
