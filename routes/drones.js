const express = require('express');

// require the Drone model here
const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((dbRes) => {
      res.render("drones/list.hbs", {
        drones: dbRes,
      })
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const {
    name,
    propellers,
    maxSpeed
  } = req.body;
  console.log(name, propellers, maxSpeed);
  try {
    await DroneModel.create({
      name,
      propellers,
      maxSpeed,
    });
    console.log("drone successfully created :D");
    res.redirect("/drones");
  } catch (err) {
    next(err);
    res.render("error.hbs");
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form.hbs", drone);
    })
    .catch((err) => {
      console.log(err);
      // next(err);
      res.redirect("/drones/create")
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {
    name,
    propellers,
    maxSpeed
  } = req.body;

  // "Voici la forme développée de la création des constantes à partir des informations de l'objet req.body :"
  // const name = req.body.name;
  // const propellers = req.body.propellers;
  // const maxSpeed = req.body.maxSpeed;

    DroneModel.findByIdAndUpdate(req.params.id, {
      name,
      propellers,
      maxSpeed
    })
    .then((drone) => {
      res.redirect("/drones");
      console.log("drone successfully updated :D");
    })
    .catch((err) => {
      console.log("!!!!!!!!!!!!!!!!!!!!");
      console.log(err);
      // res.redirect(`/drones/${req.params.id}/edit`)
      res.render("drones/update-form.hbs", drone);
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
DroneModel.findByIdAndDelete(req.params.id)
.then(() => {
 console.log("Drone successfully deleted");
 res.redirect("/drones");
})
.catch((err) => {
  console.log(err);
})
});

module.exports = router;