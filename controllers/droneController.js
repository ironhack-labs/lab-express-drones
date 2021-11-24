const Drone = require("./../models/Drone.model");

//listar drones
exports.getAllDrones = async (req, res) => {
  const allDrones = await Drone.find({});
  // console.log(allDrones);
  res.render("drones/list", {
    data: allDrones,
  });
};

//crear drone
//1.vista
exports.viewCreateDrone = async (req, res) => {
  res.render("drones/create-form");
};

//2.datos
exports.createDrone = async (req, res) => {
  //obtener datos del formulario
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
  //console.log(newDroneCreated);
  res.redirect("/drones");
  console.log("Datos recibidos");
};

//Editar drone
//1. vista
exports.viewEditDrone = async (req, res) => {
  //pasarle el id a la vista
  const DroneID = req.params.id;
  const foundDrone = await Drone.findById(DroneID);
  res.render("drones/update-form", {
    data: foundDrone,
  });
};
//2.datos

exports.editDrone = async (req, res) => {
  const droneID = req.params.id;
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  const image = req.body.image;

  //Realizar la actualizacion de datos en la DB

  const updateDrone = await Drone.findByIdAndUpdate(
    droneID, //id del documento
    { name, propellers, maxSpeed, image },
    { new: true } //devolver a la variable el documento
  );
  console.log(updateDrone);
  res.redirect(`/drones`);
};

exports.deleteDrone = async (req, res) => {
  //1.Identificar drone que quiero borrar
  const droneID = req.params.id;

  //2.Borrado en DB
  const deletedDrone = await Drone.findByIdAndDelete(droneID);

  //Redireccion
  res.redirect(`/drones`);
};
