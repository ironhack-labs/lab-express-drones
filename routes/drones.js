const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')



// Lo que le estoy diciendo es que en la /drones en el url me muestre o renderice el drones/list y si quiero 
// personalizar esa vista me toca es en drones/list porque eso es lo que este renderizando cuando le doy en esa url 


router.get('/drones', (req, res) => {

  Drone
    .find()
    .then(dronesFromDB => {
      res.render('drones/list', { drones: dronesFromDB })
    })
    .catch(err => console.log(err))

});
// ******************************
router.get('/drones/create', (req, res) => {
  res.render('drones/create-form')
})

// ******************************
router.post('/drones/create', (req, res) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect(`/drones`)
    })
    .catch(err => console.log(err))
});
// ******************************


router.get('/drones/:drone_id/edit', (req, res) => {

  const { drone_id } = req.params

  Drone
    .findById(drone_id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(err => console.log(err))

});


// ******************************

router.post('/drones/:drone_id/edit', (req, res) => {
  const { name, propellers, maxSpeed } = req.body
  const { drone_id } = req.params

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
});


// **********************
router.post('/drones/:drone_id/delete', (req, res) => {

  const { drone_id } = req.params

  Drone

    .findByIdAndDelete(drone_id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

module.exports = router;

// Use the Mongoose.find() method to retrieve all the drones.Display all the drones on the drones / list.hbs view.Make sure you catch the error and output it to the terminal.
// In the drones / list.hbs file, use a #each loop to display tags with each drone's name, propellers, and speed.
// Add the link that goes to / drones route in the layout.hbs file to easier navigate to the list of drones.
