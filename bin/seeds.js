// Iteration #1
require("dotenv").config()
const mongoose = require('mongoose')
const Dron = require('../models/dron')

const data = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

async function seedDb(){
    try {
        await mongoose.connect('mongodb://localhost/express-drones-dev', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const drones = await Dron.create(data)
        console.log("DronesDB:", data)
        mongoose.connection.close()
    } catch (err) {
        console.error(err)
    }
}
seedDb()