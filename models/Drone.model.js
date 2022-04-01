// Iteration #1

const {Schema, model} = require ('mongoose');

const droneSchema = new Schema({
    name:{
        type: String,
    }, 
    propellers:{
        type:Number
    },
    maxSpeed:{
        type:Number,
        min: 0
    }
}, {timestamps:true})

module.exports = model('Drone', droneSchema);