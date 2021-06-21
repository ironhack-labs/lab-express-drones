const { findById } = require('../models/Drone.model')
const Drones = require('../models/Drone.model')

module.exports.showDrones = (req, res, next) => {
    Drones.find()
    .then((drones) => {
        res.render('list',{ drones : drones })
    }) 
    .catch(e => console.error(e))
}
module.exports.createDrones = (req, res, next) => {
    res.render('create-form')
}
module.exports.postNewDrone = (req, res, next) => {
 Drones.create(req.body)
 .then(() => {
     res.redirect('/drones')
 })
 .catch(e => console.error(e))
}
module.exports.updateDrone = (req, res, next) => {
    Drones.findById(req.params.id)
    .then((drone) => res.render("update-form", drone))
    .catch(e => console.error(e))
}
module.exports.editDrone = (req, res, next) => {
    //console.log(req.body)
Drones.findByIdAndUpdate(req.params.id, req.body)
.then(()=> {
    res.redirect('/drones')
}) .catch(e => console.error(e))
}
module.exports.deleteDrone = (req, res, next) => {
    Drones.findByIdAndDelete(req.params.id, req.body)
    .then(() => {
        res.redirect('/drones')
    }).catch(e => console.error(e))
}