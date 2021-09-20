
const { router } = require("../app")
const Drone = require("../models/Drone.model")

//mostrar drones
exports.listDrones = (req, res) => {
    Drone.find({})
        .then((dbDrone) => {
            res.render("drones/list", { //2do elemento es un objeto
                droneList: dbDrone
            })
        })
        .catch((e) => {
            console.log(e)
        })
    
}

exports.index = (req, res) => {
    res.render("index")
  }

  exports.create  = (req,res) => {
    res.render("drones/create-form")
}

  //crear dron
  exports.createDrone = (req, res) => {
    const { name, propellers, maxSpeed } = req.body
    Drone.create({
        name,
        propellers,
        maxSpeed
    })
        .then((newDrone) => {
            console.log(newDrone)
            res.redirect("drones/list")        
        })
        .catch((e) => {console.log(e)})

}

//update dron
    exports.updateDrone = (req, res) => {    
    Drone.updateOne({id})
    .then((dron) => {
        console.log("Actualizado")
        res.render(dron)
    })
    }

//borrar dron
 exports.deleteDrone = (req, res) => {
     const {id} = req.params
    Drone.findByIdAndRemove(id)
    .then((borrado) => {
        console.log(borrado)
        res.redirect("drones/list")
    })
    .catch(e => console.log(e)) 
  }

