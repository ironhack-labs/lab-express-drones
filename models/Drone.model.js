// Iteration #1

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    propellers: {
        type: Number,
        required: true
    },
    maxSpeed: {
        type: Number,
        required: true
    }
})

const Recipe = mongoose.model('Drone', recipeSchema);

module.exports = Recipe
