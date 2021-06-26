const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    DroneModel.find()
    .then((drones) => {
      res.render('drones/list.hbs', {drones})

    })
    .catch((err) => {
      next('Drone fetch failed: ' + err);
    })

    
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone

  res.render('drones/create-form.hbs') 


});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    const {name, propellers, maxSpeed } = req.body

    // Add this to our DB 
    DroneModel.create({name, propellers, maxSpeed})
        .then(() => {
            // send the user to a specific url
            res.redirect('/drones')
        })
        .catch(() => {
            next('Create failed')
        })
})    

router.get('/drones/:id/edit', (req, res, next) => {
  let dynamicDroneId = req.params.id

    DroneModel.findById(dynamicDroneId)
    .then((drone) => {

        res.render('drones/update-form.hbs', {drone})
    })
    .catch(() => {
        next('Cannot find drone')
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  let dynamicDroneId = req.params.id

  const {name, propellers, maxSpeed} = req.body

    DroneModel.findByIdAndUpdate(dynamicDroneId, {name, propellers, maxSpeed})
    .then(() => {
        res.redirect('/drones')
    })
    .catch(() => {
        next('Edit failed')
    })
});

router.get('/drones/:id/delete', (req, res, next) => {

  let id2 = req.params.id

  DroneModel.findByIdAndDelete(id2)
  .then(()=>{

      res.redirect('/drones')//start with a / because we are redirecting the user to a url 
  })
  .catch(()=>{
      next("Deleting specific todo failed")
  })

});


module.exports = router;
