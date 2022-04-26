// Iteration #1
const { schema, model } = require ("mongoose");

const DroneSchema = new schema({
    name: String,
    propeller: Number,
    maxSpeed: Number,
});

module.exports = model("drones", DroneSchema);