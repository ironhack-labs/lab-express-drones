const Drone = require('../models/Drone.model');

exports.getDrones = async (req, res) => {

    try {
        const foundDrones = await Drone.find({});
        console.log(foundDrones);
        res.render('drones/list', {
            data: foundDrones
        })
    } catch (error) {
        console.log(error);
    }

}

exports.createDrones = async (req, res) => {
    res.render('drones/create')
}

exports.createDronesForm = async (req, res) => {
    const { name, propellers, maxSpeed } = req.body;

    try {
        await Drone.create({ name, propellers, maxSpeed })
        return res.redirect('/drones');
    } catch (error) {
        console.log(error);
        return
    }
}

exports.editDrone = async (req, res) => {
    const { droneID } = req.params;
    const foundDrone = await Drone.findById(droneID);
    res.render('drones/update-form', { drone: foundDrone });
}

exports.editDroneForm = async (req, res) => {
    const {droneID} = req.params;
    const { name, propellers, maxSpeed } = req.body;
    const updateDrone = await Drone.findByIdAndUpdate(
        droneID,
        { name, propellers, maxSpeed },
        { new: true }
    )
    console.log(updateDrone);
    return res.redirect(`/drones`)
}

exports.deleteDrone = async (req, res) => {
    const { droneID } = req.params;
    await Drone.findByIdAndDelete(droneID);
    return res.redirect('/drones')
}
