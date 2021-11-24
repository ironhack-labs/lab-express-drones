// ./controllers/droneController.js
const Drone = require('../models/Drone.model');

exports.getAllDrones = async (req, res) => {
    const allDrones = await Drone.find({});

    console.log(allDrones);

    res.render('drones/list', {
        data: allDrones,
    });
};

exports.getDrone = async (req, res) => {
    const singleDroneID = req.params.droneID;

    const getTheDrone = await Drone.findById(singleDroneID);

    console.log(getTheDrone);

    res.render('drones/single', {
        data: getTheDrone,
    });
};

exports.viewCreateDrone = async (req, res) => {
    res.render('drones/create');
};

exports.createDrone = async (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const propellers = req.body.propellers;
    const maxSpeed = req.body.maxSpeed;
    const image = req.body.image;

    const newDroneCreated = await Drone.create({
        name,
        propellers,
        maxSpeed,
        image,
    });

    console.log(newDroneCreated);

    res.redirect('/drones');

    console.log('Datos recibidos');
};

exports.viewEditDrone = async (req, res) => {
    console.log(req.params);

    const droneID = req.params.droneID;

    const foundDrone = await Drone.findById(droneID);

    res.render('drones/edit', {
        data: foundDrone,
    });
};

exports.editDrone = async (req, res) => {
    // 1. EL ID DEL DRONE
    const droneID = req.params.droneID;

    // 2. LOS NUEVOS CAMBIOS DEL FORMULARIO
    const name = req.body.name;
    const propellers = req.body.propellers;
    const maxSpeed = req.body.maxSpeed;
    const image = req.body.image;

    console.log(droneID);
    console.log(name, propellers, maxSpeed, image);

    // 3. REALIZAR LA ACTUALIZACIÓN DE DATOS EN LA BASE DE DATOS
    // findByIdAndUpdate([ID], [NUEVOS CAMBIOS EN OBJETO], [DEVOLVER A LA VARIABLE LA ACTUALIZACIÓN])
    const updatedDrone = await Drone.findByIdAndUpdate(
        droneID, // ID DEL DOCUMENTO
        { name, propellers, maxSpeed, image },
        { new: true }, // DEVOLVER A LA VARIABLE EL DOCUMENTO ACTUALIZADO
    );

    console.log(updatedDrone);

      /* res.redirect(`/drones/${updatedDrone._id}`); */
      res.redirect(/drones/);
};

exports.deleteDrone = async (req, res) => {
    // 1. IDENTIFICAR EL DRONE QUE QUIERO BORRAR
    const droneID = req.params.droneID;

    // 2. REALIZAMOS BORRADO EN BASE DE DATOS
    const deletedDrone = await Drone.findByIdAndDelete(droneID);

    console.log('Borrado del drone:', deletedDrone);

    // 3. REDIRECCIÓN
    res.redirect('/drones');
};
