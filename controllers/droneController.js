const Drone  =    require("./../models/Drone.model")

//list
exports.getAllDrones = async (req,res) => {
    const allDrones = await Drone.find({})
    res.render("drones/list", {
        data: allDrones
})
}

//create
exports.viewCreateDrone = async(req,res) => {
    res.render("drones/create")
}

exports.createDrone = async (req,res) => {
const name = req.body.name
const propellers  = req.body.propellers
const maxSpeed = req.body.maxSpeed

const  newDroneCreated = await Drone.create({name, propellers, maxSpeed, image})
    console.log(newDroneCreated)
    res.redirect("/drones") //esto te lleva de nuevo a drones
}

//edit
exports.viewEditDrone = async (req, res) => {
	const droneID = req.params.droneID
	const foundDrone = await Drone.findById(droneID)
	res.render("drones/edit", {
		data: foundDrone
	})
}

exports.editDrone =  async(req,res) => {
const droneID = req.params.droneID
const name = req.body.name
const propellers = req.body.propellers
const maxSpeed = req.body.maxSpeed

const updatedDrone =  await Drone.findByIdAndUpdate(droneID, //primer argumento: ID,
    {name, propellers, maxSpeed},                 //luego los nuevos cambios en formato de objeto, 
    {new:true})                                           //y tercero devolver a la variable la actualización

res.redirect(`/drones`)
}

//single drone
exports.getDrone = async (req,res) => { //req es lo que envía el navegador
    const DroneID = req.params.droneID
    const getTheDrone = await Drone.findById(DroneID)
        res.render("drones/single", {
            data: getTheDrones
        })
    }

//delete drone
exports.deleteDrone = async(req,res) => {
        //identificar el drone que quiero borrar
        const droneID = req.params.droneID
        //realizamos borrado en base de datos
        const deletedDrone = await Drone.findByIdAndDelete(droneID)
        console.log(droneID)
        //redireccionar
        res.redirect("/drones")
    }