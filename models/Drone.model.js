// Iteration #1

const { Schema, model } = require("mongoose");

//conectarse a la base de datos

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

//Hay que exportar el modelo
module.exports = model("drone", droneSchema);
