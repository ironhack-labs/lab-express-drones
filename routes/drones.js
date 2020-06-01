const express = require('express');

// require the Drone model here
let DronesModel = require('../models/drone.model')

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DronesModel.find()
    .then((resultat)=>{res.render('../views/drones/list.hbs', {resultat})})

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('../views/drones/create-form.hbs')


});

//send --> terminal 
//redirect --> '/home'
//render --> client 

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  
    DronesModel.create({name: name, propellers: propellers, maxSpeed: maxSpeed})
        .then(()=>{
            res.redirect('/drones')
            

        })
        .catch(()=>{
            res.render('../views/drones/create-form.hbs')
        })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DronesModel.findById(req.params.id)
        .then((paquet)=>{res.render('../views/drones/update-form.hbs', {paquet})
        })
        .catch(()=>{res.send('Hmmm... Something went wrong')
        })


});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    let id = req.params.id
    const {name, propellers, maxSpeed} = req.body;
    DronesModel.findByIdAndUpdate(id, {$set :{name: name, propellers: propellers, maxSpeed: maxSpeed}})
        .then(()=>{
            res.redirect('/drones')
        })
        .catch((response)=>{
            res.render('../views/drones/update-form.hbs', {response})
        })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DronesModel.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.redirect('/drones')
        })
});

module.exports = router