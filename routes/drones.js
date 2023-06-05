const express = require('express');
const router = express.Router();
const Drone = require('../routes/drones.js');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(drones => {
    res.render('drones/list', { drones });
  })
  .catch(error => {
    console.log('Error', error);
  });
});

router.get('/drones/create', (req, res, next) => {
 res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed})
  .then(() => {
    res.redirect('/drones');
  })
  .catch(error => {
    console.log('Error creating new drone:', error);
    res.render('drones/create-form');
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;

  Drone.findById(id)
  .then(drone => {
    res.render('drones/update-form', {drone});
  })
  .catch(error => {
    console.log('Error retrieving drone', error);
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrones =>
    res.redirect(`/drones/${updatedDrones.id}`))
.catch(error => {
  console.log('Error updating drone:', error);
  res.render('drones/update-form', {drone:req.body});
});

});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;

  Drone.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones');
  })
  .catch(error => {
    console.log('Error deleting drone:', error);
    res.render('404');
  });
});

module.exports = router;
