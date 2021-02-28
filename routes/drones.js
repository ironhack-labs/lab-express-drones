const express = require('express');
const droneModel = require("./../models/Drone.model");

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
droneModel.find() 
.then((dbRes) => {
  res.render("list", {
    hackers: dbRes,
  });
})
.catch((dbError) => {
  next(dbError);
});
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
res.render("create-form")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  console.log( name, propellers, maxSpeed);
  try {
    await droneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  droneModel.findById(req.params.id)
    .then((drone) => {
      console.log(drone);
      res.render("update-form", { drone });
    })
    .catch((dbError) => {
      next(dbError);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await droneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err); 
  }});

module.exports = router;
