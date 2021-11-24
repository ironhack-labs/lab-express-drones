//imports
const Drone = require ("./../models/Drone.model")

//CREATE - READ
exports.getAllDrones = async(req, res) =>{
  const allDrones = await Drone.find({})
  res.render("drones/list",{
      data:allDrones
  })
  //print result => console.log(allDrones)
}

//CREATE
exports.viewCreateDrone = async(req, res)=>{
    res.render("drones/create-form")
    
}

exports.createDrone = async(req, res)=>{
   const name =  req.body.name
   const propellers = req.body.propellers
   const maxSpeed = req.body.maxSpeed
   const image = req.body.image
  
   const newDroneCreated = await Drone.create({name, propellers, maxSpeed, image})
   console.log(newDroneCreated)
   res.redirect("/drones")

}

//update

exports.viewEditDrone = async(req, res) =>{
    const droneID = req.params.droneID
    
    const foundDron = await Drone.findById(droneID)
    console.log(foundDron)
    res.render("drones/update-form", {
        data: foundDron
    })
 }

exports.editDrone = async(req, res) =>{
    const droneID = req.params.droneID
   
    //getting data from db
    const name =  req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image
  console.log(droneID)
   const updateDron = await Drone.findByIdAndUpdate(
       droneID, 
       {name, propellers, maxSpeed, image},
       {new:true}
   )
   console.log(updateDron)
   res.redirect("/drones")

}

exports.deleteDrone = async(req, res) =>{
    const droneID = req.params.droneID

    const deletedDrone = await Drone.findByIdAndDelete(droneID)
    console.log("dron borrado:", deletedDrone)
    res.redirect("/drones")
}

