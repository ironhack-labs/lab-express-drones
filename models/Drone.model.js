const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxPrice: Number
})
const Drone = mongoose.model("Drone", schema)

module.exports = Drone