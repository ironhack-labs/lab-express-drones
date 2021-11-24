//1. IMPORT
const Drone = require("./../models/Drone.model")

//--------------------VIEW ALL DRONES--------------------
exports.listDrones = async(req,res) =>{

    const listAllDrones = await Drone.find({}) // Busca a todos ({})
    console.log(listAllDrones)
    // carpèta de 👇  views/drone/list
    res.render("drones/list", {
        data: listAllDrones
    })
}

//-------------Iteration #3: Add a new drone-------------
exports.viewCreatedDrone = async (req,res) =>{

    res.render("drones/create-form")

}

exports.createDrone = async (req,res) =>{

    // console.log(req.body) //<--- datos del formulario
    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed
    const image = req.body.image

    const newDroneCreated = await Drone.create({name, propellers, maxSpeed, image})
    console.log(newDroneCreated)

    console.log("Datos recibidos") // para ver si recibe mis datos

    res.redirect("/drones")
}

//-------------Iteration #4: Update the drone-------------

exports.viewUpdateDrone = async (req,res) =>{

    console.log(req.params) //<----- datos dinamicos de una URL
    const droneID = req.params.droneID
    const foundDrone = await Drone.findById(droneID)
    console.log(foundDrone)
    res.render("drones/update-form",  {
        dataD: foundDrone
    })

}

exports.updateDrone = async (req,res) =>{
    
    //1. ID Del drone (primer dato)
     const droneID = req.params.droneID
 
     const name = req.body.name
     const propellers = req.body.propellers
     const maxSpeed = req.body.maxSpeed
     const image = req.body.image
 
     console.log(droneID) 
     console.log(name, propellers, maxSpeed,image) 

     //3. Realizar la actualizacion de Datos en la BD
     //findByIdAndUpdate (ID, [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACION])
     const updatedDrone = await Drone.findByIdAndUpdate(
         droneID, //<------ ID del documento
         {name, propellers, maxSpeed,image}, //<------ parametros que vamos a editar
         {new:true}) // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
     
         console.log(updatedDrone)
 
         res.redirect(`/drones/`)
 }

 //-------------Iteration #5: Delete the drone-------------

 exports.deleteDrone = async (req,res) =>{

    //1. ID 
    const droneID = req.params.droneID

   //2. Realizamos borrado en BD
   const deleteDrone = await Drone.findByIdAndDelete(droneID)

   //3. Redireccion
   res.redirect(`/drones`)

 }
 