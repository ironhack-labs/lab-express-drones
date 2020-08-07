const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//create model
const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
},
{
    timeStamps: true
}
)

//export model

module.exports = model('Drone', droneSchema);
