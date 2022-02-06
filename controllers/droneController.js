const async = require("hbs/lib/async")
const Drone		= require("./../models/Drone.model")

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

	return res.render("drones/create-form")

}

exports.createDronesForm = async (req, res) => {

	// 1. VERIFICAR QUE LOS DATOS DEL FORMULARIO LLEGUEN AL SERVIDOR
	const { name, propellers, maxSpeed, image } = req.body
	// const title = req.body.title
	
	// 2. CREAR EL DOCUMENTO EN BASE DE DATOS
	try {
        //await Book.create({ title, description, author, rating })
        await Drone.create({ name, propellers, maxSpeed, image })
        return res.redirect("/drones")

    }catch(error){
        console.log(error)
    }

}

exports.updateDrones = async (req, res) => {

    const {id}=req.params
    const foundDrones = await Drone.findById(id)

    res.render("drones/update-form", {drone:foundDrones})

}

exports.updateDronesForm = async (req, res) => {

    //NECESITO EL ID DEL LIBRO PARA EDITAR
    const {id} =req.params
    //DATOS DEL FORMULARIO NUEVOS CON LOS CUALES VOY A ACTUALIZAR
    const { name, propellers, maxSpeed, image } = req.body
    //actualizar base de datos
    const updateDrones = await Drone.findByIdAndUpdate(
        id,{ name, propellers, maxSpeed, image },
        {new:true}
    )

    // REDIRECCIONAR A LA PAGINA INDIVIDUAL DEL LIBRO
        return res.redirect(`/drones`)
}

exports.deleteDrone = async(req, res) => {

    //NECESITO EL ID DEL LIBRO PARA EDITAR
    const {id} =req.params
    //DATOS DEL FORMULARIO NUEVOS CON LOS CUALES VOY A ACTUALIZAR
    //const deleteBook = await Book.findByIdAndDelete(bookID)
    await Drone.findByIdAndDelete(id)
    res.redirect("/drones")
}