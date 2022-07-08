const { drones } = require("../models/Drone.model") // duda de que hace
const Drone = require("../models/Drone.model")

module.exports.list = (req, res, next) => {
    Drone.find(req.query).then((drones) => { 
        res.render("drones/list", {drones});
    });
}

module.exports.new = (req, res, next) => {
    Drone.find(req.query).then((drones) => {  
        res.render("drones/create-form");
    });
}

//(C)CREATE
module.exports.create = (req, res, next) => {
    const drone = req.body;
    Drone.create(drone).then((drones) => {  
        res.redirect("/drones");
    });
}

//(R)READ 
module.exports.detail = (req, res, next) => {
    Drone.findById(req.params.id).then((drone) => { 
        res.render("drones/update-form", {drone});
    });
}


//(U)UPDATE
module.exports.update = (req, res, next) => {
    console.log(req.body)
    Drone.findByIdAndUpdate(req.params.id, req.body).then((drones) => { 
        res.redirect("/drones");
    });
}

//(D)DELETE
module.exports.delete = (req, res, next) => {
    console.log(req.body)
    Drone.findByIdAndDelete(req.params.id).then((drones) => { 
        res.redirect("/drones");
    });
}