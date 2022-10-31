// Iteration #1
const {Schema, model} = require('mongoose')

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
    
},
{
    timestamps: true
}
)

const Drones= model("Drone", droneSchema)

module.exports= Drones;