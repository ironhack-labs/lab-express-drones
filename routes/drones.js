const express = require('express');
const router = express.Router();

const DroneModel = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  console.log("antes de find");
  DroneModel
    .find()
    .then(drones => {
      res.render("../views/drones/list", { drones })
    })
    .catch(e => console.log(e));

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  res.render("../views/drones/create-form")

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, speed } = req.body;
  console.log(req.body);
  DroneModel.create({ name, propellers, speed })
    .then((newDrone) => {
      res.redirect(`/`);
    })
    .catch((err) => next(err));
});

router.get('/drones/:id/edit', (req, res, next) => {
  //const { name, propellers, speed } = req.body;
  //DroneModel.findByIdAndUpdate()

  DroneModel.findById(req.params.id)
    .then(drone => {
      res.render("drones/update-form.hbs", drone);
    })
    .catch((err => next(err)))


});

router.post('/drones/:id/edit', (req, res, next) => {

  const { name, propellers, speed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, speed })
    .then(drone => {
      res.redirect("/drones")
    })
    .catch((err) => next(err))

});

router.post('/drones/:id/delete', (req, res, next) => {

  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones")

    })
    .catch((err) => next(err));
});


module.exports = router;
