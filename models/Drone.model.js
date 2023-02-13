// Iteration #1

const { Schema, model } = require("mongoose"); // everytime we create a model, this should be at the top

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
}, {
    timestamps: true, // it creates the object and updates the time, everytime we update the model
})

module.exports = model("Drone", droneSchema)