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