// CONTROLLER = Incluimos las funciones para acceder a nuestras rutas y poder generar cambios


// 1. IMPORTACION (Modelo del los drones)
const Drone = require("./../models/Drone.model")



// 2. FUNCIONES (Para cada ruta en particular y luego se exporta routes)


// READ

exports.getAllDrones = async (req, res) => {
	
	// Buscamos con metodo find todos los libros en nuestra base de datos
	const allDrones = await Drone.find({})

	console.log(allDrones)

	// Renderizamos todos los drones
	res.render("drones/list", {
		data: allDrones
	})
}


exports.getDrone = async (req, res) => {
	// Funcion que me permite obtener la ruta de un libro en particular por su ID
	const singleDroneID = req.params.droneID

	const getTheDrone = await Drone.findById(singleDroneID)

	console.log(getTheDrone)

	// Renderizamos la informacion del libro en particular al cual le damos click
	res.render("drones/single", {
		data: getTheDrone
	})
}



// CREATE

exports.viewCreateDrone = async (req, res) => {

	res.render("drones/create-form")

}


exports.createDrone = async (req, res) => {

	console.log(req.body)

	// Info a mostar al crear mi nuevo libro
	const name = req.body.name
	const propellers = req.body.propellers
	const maxSpeed = req.body.maxSpeed
	


	const newDroneCreated = await Drone.create({name, propellers, maxSpeed})

	console.log(newDroneCreated)

	// Una vez generado el nuevo libro me redirige a la pagina principal de liros
	res.redirect("/drones")

	console.log("Datos recibidos")

}



// UPDATE

exports.viewEditDrone = async(req, res) => {

	//Nos permite obtener los datos dinamicos de una ruta
	console.log(req.params)

	// Asignar el id a una varibale del libro
	const droneID = req.params.droneID

	// Encontrar un libro en particular
	const foundDrone = await Drone.findById(droneID)

	console.log(foundDrone)

	res.render("drones/edit",{
		// los daros del lirbo se manda a tareves de de data
		data:foundDrone
	} )

}




exports.editDrone = async(req, res) => {

	// 1. ID del libro a editar
	const droneID = req.params.droneID



	// 2. Los nuevos cambios del formulario
	const name = req.body.name
	const propellers = req.body.propellers
	const maxSpeed = req.body.maxSpeed


	

	// 3. Realizar la actualizacion en la base de datos

	// Lo busca en la base de datos por su ID, donde le menciona que se le pasaran nuevos arguments
	const updatedDrone = await Drone.findOneAndUpdate(
		{_id:droneID},
		{name, propellers, maxSpeed},
		{new: true}
		
	)

	console.log(updatedDrone)

	// Al actulizarlo me manda a la pagina ya con el libro actualizado en particular
	res.redirect(`/drones`)

}





// 4. DELETE

exports.deleteDrone = async (req, res) => {

	// Identificar el libro que quiero borrar
	const droneID = req.params.droneID

	// Borrado en base de datos
	const deletedDrone = await Drone.findByIdAndDelete(droneID)

	console.log(deletedDrone)

	// Redireccion
	res.redirect("/drones")

}

