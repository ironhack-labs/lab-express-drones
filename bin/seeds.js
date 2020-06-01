// Iteration #1
let DroneModel = require('../models/Drone.model');
const mongoose = require('mongoose');
require('../configs/db.config');



let droneArray = [
    {
        name: 'Funkatron',
        propellers: 4,
        maxSpeed: 15
    },
    {
        name: 'Blimper',
        propellers: 4,
        maxSpeed: 12
    },
    {
        name: 'Fartster',
        propellers: 4,
        maxSpeed: 18
    }
]

let dataBase = DroneModel.create(droneArray)
.then((results) => {
console.log('working', results)
})
.catch(()=> {
    console.log('Something is wrong')
})



Promise.all([dataBase])
.then((response) =>{
    mongoose.connection.close()
    .then((response) => {
        console.log('closing the database')
    })
    .catch(() => {
        console.log('Somthing went wrong')
    })
})
.catch(() => {
    console.log('Something really bad went wrong!')
})


