const Drone = require("./../models/Drone.model")


exports.getDrones = async (req, res) => {
	try {
			const foundDrones = await Drone.find({})
		res.render("drones/list", {
			data: foundDrones
		})
	} catch (error) {
				console.log(error)
	}	
}

exports.createDrones = async (req, res) => {
	return res.render("drones/create")
}

exports.createDronesForm = async (req, res) => {

	// 1. VERIFICAR QUE LOS DATOS DEL FORMULARIO LLEGUEN AL SERVIDOR
	const { name, propellers, maxSpeed } = req.body
	
	try {
		await Drone.create({ name, propellers, maxSpeed })
		return res.redirect("/drones")	
	} catch (error) {
		console.log(error)
		return
	}
}


exports.editDrone = async (req, res) => {
	const { droneID } = req.params
	const foundDrone = await Drone.findById(droneID)
	res.render("drones/update-form", { drone: foundDrone })
}


exports.editDroneForms = async (req, res) => {
	
	const { droneID } = req.params
		const { name, propellers, maxSpeed } = req.body

	
	const updatedDrone = await Drone.findByIdAndUpdate(
		droneID,
		{ name, propellers, maxSpeed },
		{ new: true }
	)	
		return res.redirect("/drones")
}