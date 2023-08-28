const {Schema, model} = require("mongoose");

const drone = new Schema( {
    name: String,
    propellers: Number,
    maxSpeed: Number,
} )

module.exports = model("Drone", drone)