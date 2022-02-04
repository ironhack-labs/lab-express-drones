const Drone		= require("./../models/Drone.model")

exports.getDrones = async (req, res) => {
	try {
		const foundDrones = await Drone.find({})
		res.render("drones/list.hbs", {
			data: foundDrones
		})
        console.log(foundDrones)
	} catch (error) {
		console.log(error)
	}	
}

exports.createDrones = async (req, res) => {
	return res.render("drones/create-form.hbs")
}


exports.createDronesForm = async (req, res) => {
	const { name, propellers, maxSpeed } = req.body

	try {
		await Drone.create({ name, propellers, maxSpeed })
		return res.redirect("/drones")	
	} catch (error) {
		console.log(error)
		return
	}
}

exports.getSingleDrone = async (req, res) => {
	const { droneID } = req.params
	const getTheDrone = await Drone.findById(droneID)
	res.render("drones/single", {
		drone: getTheDrone
	})
}

exports.editDrone = async (req, res) => {
	const { droneID } = req.params
	const foundDrone = await Drone.findById(droneID)
	res.render("drones/update-form.hbs", { drone: foundDrone })
}

exports.editDroneForm = async (req, res) => {
	const { droneID } = req.params
	const { name, propellers, maxSpeed } = req.body
	const updatedDrone = await Drone.findByIdAndUpdate(
		droneID,
		{ name, propellers, maxSpeed },
		{ new: true }
	)	
	return res.redirect(`/drones/${updatedDrone._id}`)
}


exports.deleteDrone = async (req, res) => {
    const { droneID } = req.params
    await Drone.findByIdAndDelete(droneID)
    res.redirect("/drones")
}