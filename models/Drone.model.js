// Iteration #1

// { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },

const {Schema, model} = require("mongoose")

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

module.exports = model("Drone", droneSchema)