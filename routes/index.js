const router = require('express').Router();

const droneController = require('../controllers/droneController');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/list', droneController.getDrones);
    // Iteration #2: List the drones
    // ... your code here

  // Iteration #3: Add a new drone
    // ... your code here
    router.get('/create-form', droneController.getDroneCreateForm); // Esta que vaya antes de la del id porque sino entraria en la otra
    
    router.post('/create-form', droneController.doDroneCreate);
  
  
  router.post('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    // ... your code here
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
