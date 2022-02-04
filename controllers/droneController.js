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

//R: Leer drones y listarlos
exports.getDrones = async (req, res) => {
    try {
        const foundDrones = await Drone.find({});
        res.render('drones/list', {data: foundDrones})
    } catch (error) {
        console.log(error)
    }
}



//U: Actualizar dron
exports.editDroneRender = async (req, res) => {
    const { droneID } = req.params;
    const getOneDrone = await Drone.findById(droneID);
    res.render('drones/update-form', { drone: getOneDrone })
}

exports.editDroneForm = async (req, res) => {
    const { droneID } = req.params;
    const { name, propellers, maxSpeed } = req.body;
    try {
        await Drone.findByIdAndUpdate(droneID, {name, propellers, maxSpeed}, {new:true})
        return res.redirect('/drones')
    } catch (error) {
       console.log(error); 
    }
    
}

//D: Eliminar dron