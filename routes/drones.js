const express = require("express");

const Drone = require("../models/Drone.model");

// require the Drone model here

const router = express.Router();

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const droneList = await Drone.find();

    res.render("drones/list", { drones: droneList });
  } catch (err) {
    throw new Error(err);
  }
});

// Rota para renderizar o formulário
router.get("/drones/create", (req, res, next) =>
  res.render("drones/create-form")
);

// Rota para receber a requisição disparada pelo formulário
router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // Receber o corpo (body) da requisição
  const data = req.body;

  // Inserir os dados dentro do corpo da requisição no banco
  try {
    const result = await Drone.create(data);
    console.log(result);

    // Retornar sucesso ou falha para o usuário
    res.redirect("/drones");
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // Extrair o id do drone dos parâmetros de rota
  const { id } = req.params;

  // Recuperar os dados do drone pelo id do banco
  try {
    const drone = await Drone.findById(id);
    console.log(drone);

    // Renderizar o form com os dados recuperados
    res.render("drones/update-form", { drone });

    // Retornar sucesso ou falha para o usuário
  } catch (err) {
    throw new Error(err);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone

  // Extrair o id do drone do parâmetro de rota
  const { id } = req.params;

  // Atualizar o drone o encontrando por id com os dados do body da requisição
  const data = req.body;

  try {
    const updateResult = await Drone.updateOne({ _id: id }, { $set: data });
    console.log(updateResult);

    res.redirect("/drones");
  } catch (err) {
    throw new Error(err);
  }

  // Retornar sucesso ou falha para o usuário
});

router.get("/drones/confirm-deletion", (req, res) =>
  res.render("drones/delete-confirmation")
);

router.get("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // Extrair o id dos parâmetros de rota
  const { id } = req.params;

  // Deletar o documento o encontrando por id no banco
  try {
    const deletionResult = await Drone.deleteOne({ _id: id });
    console.log(deletionResult);
    res.redirect("/drones");
  } catch (err) {
    throw new Error(err);
  }

  // Retornar sucesso ou falha para o usuário
});

module.exports = router;
