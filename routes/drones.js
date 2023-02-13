const express = require('express');
const router = express.Router();
const Drones = require(`../models/drone.model`);
// require the Drone model here

router.get('/drones', async(req, res, next) => {
  try{
  let drones = await Drones.find();
        res.render (`drones/list`,{drones});

      }catch(error){
  next(error)
      }
});

router.get(`/drones/create`, (req, res) => {res.render(`drones/create-form`)});

router.post('/drones/create', async (req, res, next) => {
  try{
    const {name, propellers, speed} = req.body
    await Drones.create({name, propellers, speed})
    res.redirect(`/drones`);
  } catch (error){
    console.log (error);
    next(error);
  }
});



router.get('/drones/:id/edit', async (req, res, next) => {
  try{
    const {id} = req.params;
    const book = await Drone.findById (id);
    res.render (`drones/update-form`, drone);

} catch (error){
    console.log(error);
    next(error);
}
});

router.post('/drones/:id/edit', async(req, res, next) => {
  try{
    const {id} = req.params;
    const {name, propellers, speed} = req.body ;
    
    await Drone.findByIdAndUpdate(id, {name, propellers, speed});


       res.redirect (`/drones/${id}`);
   } catch (error) {
       console.log (error); 
       next (error);
   }
});

router.post('/drones/:id/delete', async(req, res, next) => {
  try{
    const {id} = req.params;
    
    await Drones.findByIdAndDelete (id);
    res.redirect(`/drones`);

} catch(error){
    console.log (error); 
    next (error);
}
});

module.exports = router;
