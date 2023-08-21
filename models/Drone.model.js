// Iteration #1
const mongoose = require('mongoose');

mongoose
  
  .connect('mongodb://127.0.0.1:27017/lab-express-drones')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const Schema = mongoose.Schema

const droneSchema = new Schema({

    name: String,
  
    propellers: Number,
  
    maxSpeed: Number
  
  });
  
   
  
  const Drone = mongoose.model('Drone', droneSchema);
  
   
  
  module.exports = Drone;