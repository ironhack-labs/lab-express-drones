// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: { type: String },
    propellers: { type: Number },
    maxSpeed: { type: Number },
  },
  { timestamps: true }
);

//EXPORTS
module.exports = model("SCHEMA", droneSchema);
