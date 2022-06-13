const router = require('express').Router();
const Drone = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(allTheDrones => {
      res.render('../views/drones/list',{drones: allTheDrones})
    })
    .catch(error => {
      console.log(`Error while getting the drones --> ${error}`)
      next()
    })
})

router.get('/drones/create', (req, res, next) => {
  res.render('../views/drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body

  Drone.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(error => {
      console.log(`Error while trying to create a drone `, error)
      next()
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
