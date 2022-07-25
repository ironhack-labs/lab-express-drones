const mongoose = require('mongoose')
const Drone = require('../models/Drone.model') // nos importamos el modelo
const DRONE = require('../data/drones.json')

require('../config/db.config')

mongoose.connection.once('open', ()=>{
    mongoose.connection.db.dropDatabase()   //nos borramos la database
        .then(()=>{
            console.log('Database has been eliminated')
            return Drone.create(DRONE)
        })
        .then(createdDrones =>{
                createdDrones.forEach(drone => {
                console.log(`${drone.name} has been created`)
            })

            return mongoose.connection.close()

        })
        .then(()=>{
            console.log("Connection Closed")
            process.exit(1)  //cierra el proceso de forma exitosa
        })
        .catch((err)=>{
            console.error(err)
            process.exit(0)
        })

        
})