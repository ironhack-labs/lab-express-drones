const express = require('express');
const router = express.Router();

const Drones = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  //Iteration_2

  Drones
     .find()
     .then(allTheDronesFromDB => {
         console.log('Retrieved drones from DB:', allTheDronesFromDB);
    
         res.render('drones/list.hbs', { drones: allTheDronesFromDB }); 
       })
       .catch(error => {
         console.log('Error while getting the drones from the DB: ', error);
         next(error);
       });
   });

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drones.create({ name, propellers, maxSpeed })
  .then(() => res.redirect('/drones'))
  .catch(() => res.redirect('/drones/create'));
});


router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
   
    Drones.findById(droneId)
      .then(dronToEdit => {
        res.render('drones/update-form.hbs', { dron: dronToEdit });
      })
      .catch(error => next(error));
  
  

});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone

    const { droneId } = req.params;
    const { name, propellers, maxSpeed } = req.body;
   
    Drones.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
      .then(updatedDrone => res.redirect(`/drones`)) 
      .catch(() => res.redirect('/drones/:droneId/edit'));
   
});

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
   const { droneId } = req.params;
 
   Drones.findByIdAndDelete(droneId)
     .then(() => res.redirect('/drones'))
     .catch(error => next(error));
});

module.exports = router;
