// Iteration #1

const { Schema, model, SchemaType } = require("mongoose");

//Escribir el Schema
const droneSchema = new Schema(
  {
    //aqui va nuestra estructura!!!
    name: String,
    propellers: Number,
    maxSpeed: Number,
    age: Number,
  },
  { timestamps: true }
);

//ultimo paso exports

module.exports = model("Drone", droneSchema)
