require('../configs/db.config')
const mongoose = require('mongoose')

let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})


module.exports =  mongoose.model('myDrone', DroneSchema)
// const kitty = new Drone({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));