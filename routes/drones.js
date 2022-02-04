const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {

  Drone.find()
    .then(alldronesFromDB => {
     
      console.log('Retrieved drones from DB:', alldronesFromDB);
      res.render('drones/list.hbs', { drones: alldronesFromDB }); 
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
      next(error);
    });
});
 


router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed} = req.body;

 Drone.create({ name, propellers, maxSpeed })
    .then(dronesFromDB => console.log(`New Drone created: ${dronesFromDB.name}.`))
    .catch(error => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params;
 
  Drone.findById(id)
    .then(droneEdit => {
      res.render('drones/update-form.hbs', { drone: droneEdit });
    })
    .catch(error => next(error));
  
});

router.post('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.redirect(`/drones`)) 
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
 
  const { id } = req.params;
 
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));

});

module.exports = router;
