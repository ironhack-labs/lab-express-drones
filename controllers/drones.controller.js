const Drone = require("../models/Drone.model");

module.exports.list =(req, res, next) => { // middleware 
    Drone.find() // aquí me trae todo lo que este en la BBDD
    .then((drones)=>{
        res.render("drones/list", {drones} )

    })
    .catch(err => console.log(err))
}

module.exports.create