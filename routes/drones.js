const express = require('express');
const router = express.Router();

const droneController	= require("./../controllers/droneController")


// CREATE
// CREAR DRONE / VISTA (PARA EL FORMULARIO)

router.get('/create-form',droneController.viewCreateDrone)

router.post('/create-form',droneController.createDrone)

//READ
// LEER TODOS LOS DRONES

router.get('/',droneController.getAllDrones)


// LECTURA DE UN DRONE ESPECÍFICO
router.get("/:droneID",droneController.getDrone)

//UPDATE / EDIT
// EDITAR UN DRONE

router.get('/:droneID/update-form',droneController.viewEditDrone)

router.post('/:droneID/update-form',droneController.editDrone)

// DELETE
// BORRAR UN DRONE EN ESPECIFICO

router.post('/:droneID/delete', droneController.deleteDrone)

module.exports = router;
