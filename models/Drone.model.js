// Iteration #1

const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema(
    {
    name: {
        type: String,
            minLength: 2,
            maxLength: 3,
            unique:true
    },
    propellers: {
        type: Number,
        min:8
    },
    maxSpeed: {
        type: Number,
        min:1
    }
    },{
      timestamps: true  
    } 
)

module.exports = mongoose.model("Drone", droneSchema)