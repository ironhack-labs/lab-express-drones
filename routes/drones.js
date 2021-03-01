const express = require('express');
const DroneModel = require("../models/Drone.models");
// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
  .then((dbRes) => {
    res.render("drones/list.hbs", {
      drones: dbRes,
    });
  })
  .catch((dbError) => {
    next(dbError);
  });
});
  // Iteration #2: List the drones
  // ... your code here


router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs");
});


router.post('/drones/create', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await DroneModel.create(req.params.id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err){
    next(err);
  }
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then((drone) => res.render("drones/update-form.hbs", { drone }))
    .catch(next);
  });

  // Iteration #4: Update the drone
  // ... your code here
// });

router.post('/drones/:id/edit', async (req, res, next) => {
  const { name, propellers, maxSpeed} = req.body;
  try {
    await DroneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});
  // Iteration #4: Update the drone
  // ... your code here

router.get('/drones/:id/delete', async (req, res, next) => {
  try{
    await DroneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err); 
  }
});

module.exports = router;