const mongoose = require('mongoose');

const recipeSchema = require("../models/Drone.model")

var dronesData = mongoose.model('drones', recipeSchema);

// Iteration #1

dronesData.create([{name:'Robotic1',propellers:4,maxSpeed:18}, {name:'Robotic2',propellers:4,maxSpeed:8},{name:'Robotic3',propellers:4,maxSpeed:1}], function(err,data){
console.log(data);
})
.then(() => {
    console.log(arguments)
    mongoose.connection.close()
        .then(() => {
            console.log('Heyy connection is closed!')
        })
})


