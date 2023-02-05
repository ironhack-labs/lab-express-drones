const mongoose = require('mongoose');
const Schema = mongoose.Schema

const droneSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      maxLength: [12, "minlength: 12 characters"],
      unique: true
    },
    propellers: {
      type: Number,
      required: [true, "propellers is required"]
    },
    maxSpeed: {
      type: Number,
      required: [true, "maxSpeed is required"]
    },
  }  
)

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone