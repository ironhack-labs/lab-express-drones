const express = require('express');
// require model 
const Drone = require('../models/Drone.model.js');
//require router
const router = express.Router();
//require cloudinary
const fileUploader = require('../configs/cloudinary.config');

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(allDronesFromDB => {
      res.render('drones/list', { drones : allDronesFromDB });
    })
    .catch( e => {
      console.log(`oops, we have this error : ${e}`);
      next(e);
    });
});

router.get('/drones/create', (req, res, next) => res.render('drones/create-form'));

router.post('/drones/create', fileUploader.single('image'),(req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  console.log(`req.file : ${req.file}`)
  Drone.create({ name, image: req.file.path, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(e => next(e));
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then(droneToEdit => {
      console.log(droneToEdit);
      res.render('drones/update-form', { drone: droneToEdit });
    })
    .catch(e => next(e));
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, image, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(id, { name, image, propellers, maxSpeed }, { new: true, runValidators: true})
    .then(updatedDrone => res.redirect(`/drones`))
    .catch(e => next(e));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(e => next(e));
});

module.exports = router;
