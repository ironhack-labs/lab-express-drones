const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();


router.get('/drones', (req, res, next) => {
Drone.find()
      .then( dronesFromDB => {
        res.render("drones/list", {data: dronesFromDB})
      })
      .catch (err => {
        console.log("ERROR display drones", err)
      });
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  
  Drone.create({name, propellers, maxSpeed})
    .then(() =>  {
      res.redirect('/drones');
    })
    .catch (err => {
      console.log("ERROR creating drones", err)
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  const ID = req.params.id

  Drone.findById(ID)
    .then(droneUpdate => {
      res.render('drones/update-form.hbs', { drone: droneUpdate })
    })
    .catch (err => {
      console.log("ERROR updating drone", err)
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const Id = req.params.id
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(Id, {name, propellers, maxSpeed})
  .then( ()=> res.redirect('/drones')) 
  .catch (err => {
    console.log("ERROR updating drone", err)
  });
});


router.post('/drones/:id/delete', (req, res, next) => {
  

  Drone.findByIdAndDelete(req.params.id)
    .then( () => {
      res.render('/drones')
    })
    .catch (err => {
      console.log("ERROR deleting a drone", err)
    });
});


module.exports = router;
