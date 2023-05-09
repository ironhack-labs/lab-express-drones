const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');


router.get('/drones', (req, res, next) => {
  async function getAllDrones(){
    try {
      let allDrones = await Drone.find();
      res.render('drones/list', {response: allDrones})
    } catch (err) {
      console.error(err)
    }
  }
  getAllDrones()
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');  
});

router.post('/drones/create', (req, res, next) => {
  let {name, propellers, maxSpeed} = req.body;

  async function createDrone() {
    try {
      let createdDrone = await Drone.create({name, propellers, maxSpeed});
      res.redirect('/drones');
    } catch (err) {
      console.error(err);
    }
  }
  createDrone();
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  let {droneId} = req.params;
  console.log(droneId)
  async function findDroneInfo(){
    try{
      let droneEdit = await Drone.findById(droneId);
      res.render('drones/update-form.hbs',{drone: droneEdit});
    }
    catch(err){
      console.error(err);
    }
  }
  findDroneInfo();
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  let {droneId} = req.params;
  const {name,propellers,maxSpeed}=req.body;
  async function updateDrone(){
    try{
      let updatedDrone = await Drone.findByIdAndUpdate(droneId,{name,propellers,maxSpeed},{new:true})
      res.redirect('/drones');
    }
    catch(err){
      console.error(err);
    }
  }
  updateDrone();
});

router.post('/drones/:droneId/delete', (req, res, next) => {
let {droneId} = req.params;
  async function deleteDrone(){
    try {
      let droneDeletion = await Drone.findByIdAndDelete(droneId)
      res.redirect('/drones');
    }
    catch (err) {
      console.error(err)
    }
  }
  deleteDrone()
});


module.exports = router;