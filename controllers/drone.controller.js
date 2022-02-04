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