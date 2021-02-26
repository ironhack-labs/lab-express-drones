const express = require('express');
// require the Drone model here
const DroneModel = require('./../models/Drone.model')
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then(dbBrones => {
      res.render("drones/list", {dbBrones})
      console.log("drones added to list.hbs")
    })
    .catch(err => {
      next(err)
    }) 
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // const {name, propellers, maxSpeed} = req.body;
  try {
    await DroneModel.create(req.body);
      console.log('new drone create');
      res.redirect('/drones');
  } catch(err)  {
    next(err);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
  const drone = await DroneModel.findById(req.params.id);
  res.render('drones/update-form', drone)

  } catch (err) {
    next(err)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const drone = await DroneModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/drones')
    } catch (err) {
      next(err)
    }
});

router.get('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await DroneModel.findByIdAndDelete(req.params.id)
    res.redirect("/drones");
  } catch (err) {
    next(err)
  }
});

module.exports = router;
