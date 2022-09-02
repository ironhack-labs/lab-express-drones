const express = require('express');
const { response } = require('../app');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model')
router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then(drones => {
      if (drones.length === 0) {
        res.render('not-found');
      } else {
        res.render('drones/list', { drones });
      }
    })
    .catch(err => {
      next(err);
    });
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  const auxDrone = { name };
  if (propellers) {
    auxDrone.propellers = propellers;
  }
  if (maxSpeed) {
    auxDrone.maxSpeed = maxSpeed;
  }

  const newDrone = new DroneModel(auxDrone);

  newDrone.save()
    .then((n) => {
      console.log('New Drone', n);
      res.redirect('/drones');
    })
    .catch(err => {
      next(err);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  DroneModel
    .findById(req.params.id)
    .then((drone) => {
      if (drone) {
        res.render('drones/update-form', drone);
      }
      else {
        res.render('not-found');
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  DroneModel
    .findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  DroneModel.
    findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
