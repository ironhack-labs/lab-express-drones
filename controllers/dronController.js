// ./controllers/dronController.js

const Dron                = require('./../models/Drone.model')

exports.getAllDrones = async (req, res) => {

    const allDrones = await Dron.find({})

    console.log(allDrones)

    res.render('drones/list', {
        data: allDrones
    })
}

exports.viewCreateDron = async (req, res) => {
    res.render('drones/create-form')
}

exports.createDron = async (req, res) => {

    console.log(req.body)

    const name = req.body.name
    const propellers = req.body.propellers
    const maxSpeed = req.body.maxSpeed

    const newDronCreated = await Dron.create({name, propellers, maxSpeed})

    console.log(newDronCreated)

    res.redirect('/drones')

    console.log('Datos recibidos')
}

exports.viewEditDron = async (req, res) => {

	console.log(req.params)

	const dronID = req.params.dronID

	const foundDron = await Dron.findById(dronID)

	res.render('drones/update-form', {
		data: foundDron
	})

}

exports.editDron = async (req, res) => {

	// 1. EL ID DEL Drone
	const dronID = req.params.dronID

	// 2. LOS NUEVOS CAMBIOS DEL FORMULARIO
	const name = req.body.name
	const propellers = req.body.propellers
	const maxSpeed = req.body.maxSpeed
	
	
	console.log(dronID)
	console.log(name, propellers, maxSpeed)

	// 3. REALIZAR LA ACTUALIZACIÓN DE DATOS EN LA BASE DE DATOS
	// findByIdAndUpdate([ID], [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACIÓN])
	const updatedDron = await Dron.findByIdAndUpdate(
		dronID, // ID DEL DOCUMENTO
		{name, propellers, maxSpeed},
		{new: true} // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
	)

	console.log(updatedDron)

	res.redirect(`/drones/`)

}

exports.deleteDron = async (req, res) => {

	// 1. IDENTIFICAR EL LIBRO QUE QUIERO BORRAR
	const dronID = req.params.dronID

	// 2. REALIZAMOS BORRADO EN BASE DE DATOS
	const deletedDron = await Dron.findByIdAndDelete(dronID)

	console.log("Borrado de dron:", deletedDron)

	// 3. REDIRECCIÓN
	res.redirect("/drones")
}

