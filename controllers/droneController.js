const Drone = require("../models/Drone.model");

exports.drones = (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find({})
    .then((dbDrones) => {
      res.render("drones/list", {
        listDrones: dbDrones,
      });
    })
    .catch((error) => console.log(`Hubo un error: ${error}`));
};

exports.getDrone = (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
};

exports.postDrone = (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const name = req.body.name;
  const propellers = req.body.propellers;
  const speed = req.body.speed;
  console.log(req.body);
  // Drone.create({
  // })
  //Se toman las propiedades del objeto del model
  Drone.create({
    name: name,
    propellers: propellers,
    maxSpeed: speed,
  })
    .then((newDrone) => {
      console.log(`Drone creado! : ${newDrone}`);
      res.redirect("/drones");
    })
    .catch((error) => console.log(`Hubo un error al crear: ${error}`));
};

exports.getEditDrone = (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
    .then((drone) => {
      console.log(drone);
      res.render("drones/update-form", drone);
    })
    .catch((error) =>
      console.log(
        `Hubo un error al obtener los datos para actualizar: ${error}`
      )
    );
};

exports.postEditDrone = (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log(req.params.id);
  console.log(req.body);
  Drone.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.speed,
  })
    .then((newDrone) => {
      console.log(`Drone actualizado! : ${newDrone}`);
      res.redirect("/drones");
    })
    .catch((error) => console.log(`Hubo un error al crear: ${error}`));
};

exports.deleteOne = (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  // console.log(req.params.id);
  Drone.findByIdAndDelete(req.params.id)
    .then((drone) => {
      console.log(`El dron ha sido borrado: ${drone}`);
      res.redirect("/drones");
    })
    .catch((error) => console.log(`Hubo un error al borrar: ${error}`));
};
