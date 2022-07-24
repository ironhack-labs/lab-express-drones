// Iteration #1
const mongoose= require('mongoose')
const Drone = require('../models/Drone.model')
const DRONES =require ('../data/drones.json')

// conexión BD
require('../db/index')

mongoose.connection.once('open', () =>{
    mongoose.connection.db.dropDatabase()
    .then(() => {
        console.log('db dropped')
        return Drone.create(DRONES)
    }).then (createdDrones => {
        console.log('creating drones...')
        createdDrones.forEach(drone => console.log(`${drone.name} was created`))
       
       //cierro conexión BD
       
        return mongoose.connection.close()
    }).then(() => {
        console.log('conection closed')
        process.exit(1)
    
    }).catch(err =>{
        console.error(err)
        process.exit(0)
    })
})