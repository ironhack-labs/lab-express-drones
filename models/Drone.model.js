const { Schema, model } = require("mongoose");

const droneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const Drone = model("Drone", droneSchema); // => "Drone" es el nombre del schema. El nombre de la variable puede ser cualquiera pero lo llamamos igual que el schema para entenderlo mejor.
module.exports = Drone;