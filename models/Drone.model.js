const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
      type: String,
    },
    propellers: {
      type: Number,
 
    },
    maxSpeed: {
        type: Number,
    }
})

    module.exports = recipeSchema

    //module.exports = mongoose.model('myRecipeSchema',recipeSchema)