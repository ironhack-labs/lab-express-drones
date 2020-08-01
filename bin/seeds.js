const mongoose = require('mongoose')
require('../configs/db.config')

let droneModel = require('../models/Drone.model')

const Drones = [
    {name: 'Mavic 2', propellers: 4, maxSpeed: 20},
    {name: 'Agras T-16', propellers: 6, maxSpeed: 10},
    {name: 'Anafi', propellers: 4, maxSpeed: 15}
];

droneModel.insertMany(Drones)
    .then(()=> console.log(`Database updated. ${Drones.length} drones added.`))
        .then(()=>{
            mongoose.connection.close()
                .then(()=>{console.log ('Connection closed')})
                .catch(() => (`Failed to close the connection to the database`))
        })
    .catch(()=> console.log (`Failed to update database. Insert promise rejected.`))