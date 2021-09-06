const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

// require the Drone model here

// GET '/todos/create' route to render the create form. To allow user to add elements to the DB.
router.get('/drones/create', (req, res, next) => {
  // 1. render the form where users will be able to create new elements
  res.render('./drones/create-form.hbs') // on renders, NEVER start with a "/"
})

// POST '/todos/create' route to receive data from form and create the elements in the DB (see create-form.hbs form method and action)
router.post('/drones/create', (req, res, next) => {
  // 1. receive information from form via req.body 
  const { name, propellers, maxSpeed } = req.body // destructuring the title and description from req.body for easy access. Single line.
  // const title = req.body.title // Same as above descructuring but in two lines
  // const description = req.body.description // Same as above descructuring but in two lines
  
  // 2. use that information gathered to create a new element in our DB using the mongoose .create() method, passing the obj to create with the attributes
  Drone.create({name, propellers, maxSpeed})
  .then( (data) => {
    // 3. send the user to the list of ToDos after the new ToDo is created by using redirect
    res.redirect('/drones') // on redirect, ALWAYS start with a "/"
  })
  .catch( (err) => console.log(err)); 
})


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
    Drone.find()
    .then((allDrones) => {
    res.render('./drones/list.hbs', { allDrones })
  })
})



// ***** (U)PDATE ROUTES *****

// GET '/todos/:id/edit' route to edit a single ToDo element. uses dynamic routes and params ':id'
router.get('/drones/:id/edit', (req, res, next) => {
  // 1. catch the id of the ToDo we need to display, through the dynamic params
  const { id } = req.params // best practices using destructuring
  // let id = req.params.id // same as above, perfectly fine
  
  // NOTE: this route is simply to render the edit-form to the user where they will later be able to edit the element. We don't need update methods here.

  // 2. look in the DB for that specific ToDo using the .findById() method and passing the id
  // We need current information of the ToDo in order to preview it to the user in the edit-form.
  Drone.findById(id)
  .then( (data) => {
    // 3. render the edit-form to the user, with the current ToDo information as values of the form. See edit-form.hbs
    res.render('./drones/update-form.hbs', {data})
  })
  .catch( (err) => console.log(err));
})

// POST '/todos/:id/edit' route to receive the edit changes from the edit-form done by the user and then update the element in the DB
router.post('/drones/:id/edit', (req, res, next) => {
  // 1. catch the id of the ToDo we need to edit, through the dynamic params
  const { id } = req.params // best practices using destructuring
  // let id = req.params.id // same as above, perfectly fine

  // 2. get body with elements to be edited
  const { name, propellers, maxSpeed } = req.body // best practices using destructuring
  
  // NOTE: this is the route that actually updates the element in the DB, different from the previous GET route

  // 3. use the .findByIdAndUpdate() method to edit the ToDo element with the new values. All update methods need at least two arguments
  // --- 1st argument: The id or query of the element that will be updated
  // --- 2nd argument: The properties/attributes of the element that will be updated.
  Drone.findByIdAndUpdate(id, {  name, propellers, maxSpeed })
  .then( (data) => {
    // 4. after the update is done correctly, we can redirect the user to the list of ToDos
    res.redirect('/drones')
  })
  .catch( (err) => console.log(err));
})

// ***** (D)ELETE ROUTES *****

// POST '/todos/:id/delete' route to delete a single ToDo element from the DB
router.get('/drones/:id/delete', (req, res, next) => {
  // 1. catch the id of the ToDo we need to delete, through the dynamic params
  const { id } = req.params // best practices using destructuring
  // let id = req.params.id // same as above, perfectly fine

  // NOTE: Different from other CRUD, this one doesn't need an additional GET route since there is no new view to be displayed. It is simply a button in the ToDo details view.

  // 2. use the ,findByIdAndDelete() to delete the element from the DB
  Drone.findByIdAndDelete(id)
  .then( (data) => {
    // 3. after the delete is done correctly, we can redirect the user to the list of ToDos
    res.redirect('/drones')
  })
  .catch( (err) => console.log(err));
})



module.exports = router;
