const express = require('express');

const droneModel = require("./../models/Drone.model")

const router = express.Router();

router.get("/", (req, res, next) => {
  // Iteration #2: List the drones
  droneModel.find()
    .then((dbRes) => {
      console.log(dbRes);
      res.render("drones/list", { drones: dbRes });
    }).catch((err) => {
      next(err);
    })
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name,
    propellers,
    maxSpeed } = req.body;
    try {
      await HackerModel.create({
        name,
        propellers,
        maxSpeed
      });
      res.redirect("/drones");
    } catch (err) {
      next(err);
    }
    res.send("create-form");
  });


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  droneModel.findById(req.params.id)
    .then((drones) => {
      console.log(drones);
      res.render("update-form", { drones });
    })
    .catch((dbError) => {
      next(dbError);
    });
});


router.post('/drones/:id/edit', async(req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body; 
  try {
    await droneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
  res.send("update-form");
});


router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await droneModel.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (err) {
    next(err); 
  }
});

module.exports = router;
