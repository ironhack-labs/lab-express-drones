const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then( drones => {
      console.log(drones)
      res.render('drones/list', { drones: drones })
    })
    .catch( e => console.log(e))
  
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  Drone.create( req.body )
    .then( () => {
      res.redirect('/drones')
    })
    .catch(e => res.render(e))
});

router.get('/drones/:id/edit', (req, res, next) => {

  Drone.findById(req.params.id)
    .then( droneToUpdate => {
      res.render('drones/update-form', { drone: droneToUpdate })
    }) 

});

router.post('/drones/:id/edit', (req, res, next) => {

  Drone.findByIdAndUpdate(req.params.id, req.body)

  console.log('Drone EDIT')
  .then(() => {
    res.redirect('/drones')
  })
  .catch( e => console.log(e))

});


router.post('/drones/:id', (req, res, next) => {
  
    const id = req.params.id

    Drone.findByIdAndDelete(id)
      .then( () => {
        res.redirect('/drones')
      })
});

module.exports = router;
