// Iteration #1


const { Schema, model } = require('mongoose');

const dronSchema = new Schema({
  name: { type:String},
  propellers: { type: Number, max: 8  },
  maxSpeed : { type: Number, max: 50 },
})


const DroneModel = model('drones', dronSchema );  //con esto creamos el modelo

module.exports = DroneModel;