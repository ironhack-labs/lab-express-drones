const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone 		= require("./../models/Drone.model")

router.get('/drones', async (req, res, next) => {
  const allDrones = await Drone.find({})
  res.render("drones/list", {
		data: allDrones
	})
});

router.get('/drones/create', async (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => {
  const image = req.body.image
	const name = req.body.name
	const propellers = req.body.propellers
	const maxSpeed = req.body.maxSpeed

	const newDroneCreated = await Drone.create
  ({
      image,
      name, 
      propellers,
      maxSpeed
  })


	res.redirect("/drones")
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const DroneID = req.params.id;
  const foundDrone = await Drone.findById(DroneID);
  res.render("drones/update-form", {
    data: foundDrone,
  });
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneID = req.params.id
  const image = req.body.image
	const name = req.body.name
	const propellers = req.body.propellers
	const maxSpeed = req.body.maxSpeed 
	const foundDrone = await Drone.findByIdAndUpdate(
    droneID,
    {image,name,propellers,maxSpeed},
    {new:true}
    )
    res.redirect(`/drones`)
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneID = req.params.id
  const deleteDrone = await Drone.findByIdAndDelete(droneID)
  res.redirect("/drones")
});

module.exports = router;
