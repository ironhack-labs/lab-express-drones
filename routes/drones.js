const express = require('express');
const Drone = require('../models/Drone.model'); //tem que chamar o modelo por mais contraintuitivo que isso pareça vai na fé

// require the Drone model here

const router = express.Router();

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
      const drones = await Drone.find();
      console.log(drones)
      res.render('drones/list', {drones}); //o primeiro parametro é a view que quero renderizar e o segundo é os dados que quero colocar
    } catch (error) {
      console.log(error);
    }
});

router.get('/drones/create', (req, res, next) => { //aqui é o caminho que eu quero que seja acessado
  // Iteration #3: Add a new drone
  res.render('drones/create-form'); //o nome é diferente do caminho pq aqui estou falando da view
});

router.post('/drones/create', async (req, res, next) => { //req sao todos os dados que o front mandou pro back (aqui neste caso)
  // Iteration #3: Add a new drone
  const { body } = req; //o body é um objeto criado pelo express em todo request para guardar os dados que vem no body de um post
  const drone = new Drone(body);
  await drone.save(); //a operacao de salvar na base de dados é assíncrona
  res.render('/drones'); //pra voltar pra outra pagina quando acabar de registrar o drone
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const drone = await Drone.findById(id);
  res.render('drones/update-form');
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
