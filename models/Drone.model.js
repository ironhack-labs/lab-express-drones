// Iteration #1
// import
const mongoose = require('mongoose')

// schema
const schema = mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
})
// model
const Drone = mongoose.model('Drone', schema)

// export
module.exports = Drone
