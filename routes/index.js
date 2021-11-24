
//1. IMPORTACIONES
const express = require("express");
const router = express.Router();

const indexController = require("./../controller/indexController")



//2. RUTAS DE LA URL BASE
router.get("/", indexController.home)


//3. EXPORTACIONES
module.exports = router;
