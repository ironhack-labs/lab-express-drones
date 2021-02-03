const mongoose = require('mongoose')

const droneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  propellers: {
    type: Number,
    min: 1
  },
  maxSpeed: {
    type: Number,
    min: 1
  }
})

const Drone = mongoose.model('Drone', droneSchema)
module.exports = Drone 