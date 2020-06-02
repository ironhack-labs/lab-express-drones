const express = require('express');

// require the Drone model here
router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      console.log(drones)
      res.render('../views/drones/list.hbs', {drones})
    })

const router = express.Router();

router.get('/drones', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  DroneModel.create({name, propellers, maxSpeed})
    .then((response) => {
      res.render('views/drones/create-form.hbs', {showSuccessMessage: true})
    })
    .catch(() => {
      res.render('views/drones/create-form.hbs', {showFailureMessage: true})
    })

  res.render('../views/drones/create-form.hbs')
});

router.get('/drones/create', (req, res, next) => {
  DroneModel.create(req.body)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/drones/create')
  })
});
});



router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then((drone) => {
    res.render('../views/drones/update-form.hbs', {drone})
  })

});


router.post('/drones/:id/edit', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  console.log(req.params.id)
  DroneModel.findByIdAndUpdate(req.params.id, {$set: {name, propellers, maxSpeed}})
    .then((drone) => {
      console.log(drone)
      res.redirect('/drones')
    })
    .catch(() => res.redirect(`/drones/${req.params.id}/edit`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;
