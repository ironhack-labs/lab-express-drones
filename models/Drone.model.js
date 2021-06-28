// Iteration #1
//Remember, the SCHEMA 📝 enforces a certain standard for how we want the dataMODEL 📊 to be in our DB (I think!)

const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
  },
  {
  timestamps: true,
})

module.exports = model("Drone", droneSchema);