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
