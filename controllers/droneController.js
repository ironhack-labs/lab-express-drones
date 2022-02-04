const Drone = require('../models/Drone.model')

//C: Crear dron

//R: Leer drones y listarlos, mostrar un dron
exports.getDrones = async (req, res) => {
    try {
        const foundDrones = await Drone.find({});
        res.render('drones/list', {data: foundDrones})
    } catch (error) {
        console.log(error)
    }
}

//U: Actualizar dron

//D: Eliminar dron