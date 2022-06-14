// Iteration #1
const {Schema, model } = require('mongoose');

const DronesSchema = new Schema(
{
name: String,
propellers: Number,
maxSpeed: Number,
},
{
  timestamps: true,
}
);



const Drones = model("Drone", DronesSchema)

module.exports = Drones;