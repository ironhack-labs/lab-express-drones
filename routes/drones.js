const express = require('express');
const router = express.Router();

const DroneModel = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', {drones})
    })
    .catch((err)=>{
      next(err)
    })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed} = req.body

  DroneModel.create({name, propellers, maxSpeed})
    .then(()=> {
      res.redirect("/drones")
    })
    .catch(()=>{
      res.render("drones/create-form.hbs")
    })
});

router.get('/drones/:id/edit', (req, res, next) => {

    let dynamicDroneId = req.params.id

    DroneModel.findById(dynamicDroneId)
      .then((drone) => {
        res.render("drones/update-form.hbs", {drone})
      })
      .catch((err) => {
        next(err)
      })

});

router.post('/drones/:id/edit', (req, res, next) => {
  let dynamicDroneId = req.params.id
  const {name, propellers, maxSpeed} = req.body

  DroneModel.findByIdAndUpdate(dynamicDroneId, {name, propellers, maxSpeed})
    .then(()=> {
      res.redirect("/drones")
    })
    .catch(()=>{
      res.render("drones/update-form.hbs", {drone})
    })

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  let dynamicDroneId = req.params.id

  DroneModel.findByIdAndRemove(dynamicDroneId)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;
