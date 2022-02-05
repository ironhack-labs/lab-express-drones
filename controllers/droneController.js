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
  };

exports.createDrones = async (req,res) => {
    return res.render("drones/create-form")
}


exports.createDronesForm = async (req, res) => {

	// 1. VERIFICAR QUE LOS DATOS DEL FORMULARIO LLEGUEN AL SERVIDOR
	const { name, propellers, maxSpeed } = req.body

	// 2. CREAR EL DOCUMENTO EN BASE DE DATOS

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

exports.editDroneForm = async (req, res) => {

	// 1. NECESITO EL ID DEL DRONE QUE VOY A EDITAR
	const { droneID } = req.params

	// 2. NECESITO LOS DATOS DEL FORMULARIO NUEVOS CON LOS CUALES VOY A ACTUALIZAR EL DRONE EN BD
	const { name, propellers, maxSpeed } = req.body


	// 3. ACTUALIZAR EN BASE DE DATOS
	const updateDrone = await Drone.findByIdAndUpdate(
		droneID,
		{ name, propellers, maxSpeed },
		{ new: true }
	)	

	// 4. REDIRECCIONAR A LA PÁGINA INDIVIDUAL DEL LIBRO
	return res.redirect(`/drones`)


}