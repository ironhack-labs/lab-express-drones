//2 ways to require mongoose. 
const mongoose = require('mongoose')
//or
//2nd- const { Schema, model } = require('mongoose');



//1 - create your schema here
let DroneSchema = new mongoose.Schema({
    name: String, 
    propellers: Number,
    maxSpeed: Number
})

//2nd- second way to declare your schema
// let DroneSchema = new Schema({
//     name: String, 
//     propellers: Number,
//     maxSpeed: Number
// })


//2 - create your model here
let DroneModel = mongoose.model('myDrone', DroneSchema)//1- name of the model (the collection's in the DB)  //2- is the schema of that collection

//3 - do not forget to export your model
module.exports = DroneModel //think about require this somewhere, in your drones.js file
//2nd  - module.exports = model('myDrone', DroneSchema);

//then, //make sure you import your model wherever you use it
//const DroneModel = require('../models/Drone.models')
