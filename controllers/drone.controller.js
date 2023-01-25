const Drone = require("../models/Drone.model");

module.exports.listDrones = (req, res, next) => {
    Drone.find()
    .then((dronesFromDB) => {
      res.render("drones/list", { dronesFromDB })
    })
    .catch((err) => console.log(err))
};

module.exports.createDrone = (req, res, next) => {
    res.render('drones/create-form');
};

module.exports.doCreateDrone = (req, res, next) => {
    const droneToCreate = req.body;
    
    Drone.create(droneToCreate)
    .then((created) => {
        res.redirect("/drones")
    })
    .catch(err => console.log(err))
};

module.exports.editDrone = (req, res, next) => {
    const { id } = req.params;

    Drone.findById(id)
    .then((droneToUpdate) => {
        res.render('drones/update-form', { droneToUpdate })
    })
    .catch(err => console.log(err))
};

module.exports.doEditDrone = (req, res, next) => {
    const { id } = req.params;
    const edited = req.body;

    Drone.findByIdAndUpdate(id, edited)
    .then((updated) => {
        res.redirect("/drones")
    })
    .catch(err => console.log(err));
};

module.exports.deleteDrone = (req, res, next) => {
    const id = req.params.id

    Drone.findByIdAndDelete(id)
    .then((deleted) => {
        res.redirect("/drones")
    })
    .catch(err => console.log(err))
}