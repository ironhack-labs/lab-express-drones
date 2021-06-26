const Drone = require('../models/Drone.model')

module.exports.listDrones = (req, res, next) => {
    Drone.find()
        .then((drones) => {
            console.log(drones)
            //Vamos a listar
            res.render("drones/list", { drones: drones })
        })
        .catch(e => console.log(e))
}
module.exports.createDrone = (req, res, next) => {
   res.render("drones/create-form")
}
//  .catch (e=> console.log(e))

module.exports.doCreateDrone = (req, res, next) => {
    Drone.create(req.body)
        .then(() => {
           // res.render("drones/update-form")
            res.redirect("/")
             })  
   // 
        .catch(e => console.log(e))
}


