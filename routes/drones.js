const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))
});


router.get('/drones/create-form', (req, res, next) => {

  res.render('drones/create-form')
});

router.post('/drones/create-form', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(drone => res.redirect('/drones'))
    .catch(err => res.redirect('/drones/create-form'))

});

router.get('/drones/:drone_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { drone_id } = req.params

  Drone
    .findById(drone_id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
});

router.post('/drones/:drone_id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { drone_id } = req.params
  const { name, propellers, maxSpeed } = req.body
  // console.log(name, propellers, maxSpeed)
  // console.log(drone_id)

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(drone => res.redirect('/drones'))
    .catch(err => res.redirect(`/drones/update-form/${drone._id}`))
});

// Delete book
router.post('/eliminar/:book_id', (req, res) => {

  const { book_id } = req.params

  Book
    .findByIdAndDelete(book_id)
    .then(() => res.redirect(`/libros/listado`))
    .catch(err => console.log(err))
})

router.post('/drones/:drone_id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { drone_id } = req.params
  console.log("este es el id del drone a eliminar", drone_id)

  Drone
    .findByIdAndDelete(drone_id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(err => console.log(err))

});

module.exports = router;
