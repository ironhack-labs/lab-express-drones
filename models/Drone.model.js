// Iteration #1
const mongoose = require('mongoose')
const droneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  propellers: {
    type: Number,
    required: [true, 'number of propellers is required']
  },
  maxSpeed: {
    type: Number,
    required: [true, 'maximum speed is required']
  }
})

const Drone = mongoose.model('Drone', droneSchema)
module.exports = Drone