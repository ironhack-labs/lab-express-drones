const express = require('express');
const router = express.Router();

const dronesController	= require("./../controllers/dronesController")




// 1. CREATE


// CREAR DRONE - VISTA (PARA VER EL FORMULARIO)
router.get("/create", dronesController.viewCreateDrone)

// CREAR DRONE - RUTA PARA EL FORMULARIO
router.post("/create", dronesController.createDrone)



// 2. READ 

//(ALL DRONES)
router.get("/", dronesController.getAllDrones)


// ONE DRONE
router.get("/:droneID", dronesController.getDrone)





// 3. UPDATE

// VISTA para el update
router.get("/:droneID/edit", dronesController.viewEditDrone)

// RUTA PARA EL FORMULARIO update
router.post("/:droneID/edit", dronesController.editDrone)



// 4. DELETE

//BORAR UN DRON
router.post("/:droneID/delete", dronesController.deleteDrone)



// 3. EXPORTACIÓN
module.exports = router;









/* router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

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
}); */