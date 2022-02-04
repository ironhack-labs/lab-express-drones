const Drone = require('../models/Drone.model')

//C: Crear dron
exports.createDroneRender = async (req, res) => {
    return res.render('drones/create-form')
}
exports.createDroneForm = async (req, res) => {
    const { name, propellers, maxSpeed } = req.body;
    try {
        await Drone.create({ name, propellers, maxSpeed })
        res.redirect('/drones')
    } catch (error) {
        console.log(error);
    }
}

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