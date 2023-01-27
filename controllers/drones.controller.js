const Drone = require("../models/Drone.model");

module.exports.list =(req, res, next) => { // middleware 
    Drone.find() // aquí me trae todo lo que este en la BBDD
    .then((drones)=>{
        res.render("drones/list", {drones} )

    })
    .catch(err => console.log(err))
}

module.exports.create=(req,res,next) => {
 res.render("drones/create-form");
}

module.exports.doCreate=(req,res,next) => {
    Drone.Create(req.body)
    .then(drone => {
        res.redirect("/drones")
    })
    .catch(err => console.err(err))
}
module.exports.update= (req,res,next) => {
    Drone.findById(req.params.id)
    .then(drone => {
        if (drone){
            res.render("/drones/update-form", {drone})
        } else {
            res.redirect("/drones/list")
        }
    })
    .catch(err => console.log(err))
}

module.exports.doUpdate =(req,res,next) => {
    Drone.findByIdAndUpdate(req.params.id, req.body) // encuentro por el parametro en el id y lo updateo con lo que se ha rellenado en el body
    .then (() => {
        res.redirect("/drones")
    })
    .catch (err => console.err (err))
}

module.exports.delete = (req,res,next) => {
    Drone.findByIdAndDelete(req.params.id)
    .then (() => {
        res.redirect("/drones")
    })
    .cacth (err => {
        console.err (err)
    res.redirect('/drones')
    })
}