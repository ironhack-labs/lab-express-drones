const express = require('express');
const router = express.Router();

const Drone = require("./../models/Drone.model")

//TODOS LOS DRONES
router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  const allDrones = await Drone.find({})
  console.log(allDrones)

  res.render("drones/list", {
    data: allDrones
  })
});


//CREAR DRON = VISTA FORMULARIO
router.get("/drones/create", async (req, res, next) => {
  const singleDroneID = req.params.DroneID
  const getTheDrone = await Drone.findById(singleDroneID)

  res.render("drones/create", {
    data: getTheDrone
  })
});


//CREAR DRON = RUTA
router.post("/drones/create", async (req, res, next) => {
  const name = req.body.name
  const propellers = req.body.propellers
  const maxSpeed = req.body.maxSpeed
  const newDroneCreated = await Drone.create({name, propellers, maxSpeed})

  res.redirect("/drones")
  console.log("Datos de dron recibidos")
});


//EDITAR DRON, PASO1
router.get("/drones/:id/edit", async (req, res, next) => {
  const droneID = req.params.droneID
  const foundDrone = await Drone.findById(droneID)

  res.render("drones/:id/edit", {
    data: foundDrone
  })
});


//EDITAR DRON PASO2
router.post("/drones/:id/edit", async (req, res, next) => {
  const droneID = req.params.droneID

  const name = req.body.name
  const propellers = req.body.propellers
  const maxSpeed = req.body.maxSpeed

  const updatedDrone = await Drone.findByIdAndUpdate(
    droneID,
    {name, propellers, maxSpeed},
    {new: true}
  )
  res.redirect(`/drones/${updatedDrone._id}`)
});



router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
