//
// models/Book.model.js

const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const dronSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,

});

module.exports = model('Dron', dronSchema);