const mongoose = require('mongoose')

// schema is the template to use for the collection (model)
let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})


// model is an instance of the schema, and a collection in Mongo DB, 
module.exports =  mongoose.model('myDrone', DroneSchema)

