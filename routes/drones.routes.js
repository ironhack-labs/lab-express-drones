const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')


router.get('/drones/list', (req, res, next) => { //el router necesita la / porque va a la url

  Drone
    .find()

    .then(drones => res.render('drones/list', { drones })) //el render no lleva / porque va a el archivo

    .catch(err => console.log(err))
});







// ------------------------------------------------- ITERACION 2 y 3








// -----> EL FORMULARIO SIEMPRE NECESITA 2 ENDPOINTS
// 1 -> // Drone form (RENDERIZAR)

router.get('/drones/create', (req, res, next) => {

  res.render("drones/create-form")
});

// 2 -> // Drone form (GESTIONAR)

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })

    .then(() => res.redirect("/drones/list"))

    .catch(err => console.log(err))
});








// ------------------------------------------------- ITERACION 4








router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect("/drones/list"))
    .catch(err => console.log(err))


});










// ------------------------------------------------- ITERACION 5








router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones/list'))
    .catch(err => console.log(err))
});



module.exports = router;
