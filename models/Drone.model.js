// Iteration #1

const { Schema, model } = require('mongoose')

const droneSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    propellers: {
      type: Number,
      required: true,
      trim: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Drone = model('Drone', droneSchema)
module.exports = Drone