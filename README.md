![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Basic CRUD with Drones

<br><br>

## Introduction

![Amazon Prime Air drone](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_926e75d45f2a997152f4401844b3b4d5.jpg)

The goal of this exercise is to create a basic web application using Express. You should be able to use basic Mongoose methods to Create, Read, Update, and Delete documents in a collection in the database.

The app will allow a user to keep track of their drones collection. Users should be able to see a list of their existing drones (which you will seed using previously gained knowledge), add new ones to their collection, update them as well as delete them when you don't use them anymore.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

<br><br>

## Instructions

<br>

### Iteration 0 | Initialize the project

This project has already a familiar structure: there are bin, models, views, routes, config and public folders, and _app.js_ file with lots of middleware that "glue" different parts of this application to be able to work together as one.

After forking and cloning the project, you will have to install all the dependencies:

```shell
$ npm install
```

To run the app:

```shell
$  npm run dev
```

Now you are ready to start. 🚀

<br>

### Iteration 1 | Seed the database

The first step is to **create the `Drone` model** and **seed some initial drones** in our database.

The `Drone` model should have:

- `name` - String (name of the drone model, like _General Atomics MQ-9 Reaper_)
- `propellers` - Number (amount of propellers, like _4_)
- `maxSpeed` - Number (meters per second for the drone's maximum speed, like _18_)

Steps you should follow in this iteration:

1. Go to the `Drone.model.js` file in the `models` folder. Use Mongoose schema and make sure that the Drone model has all the properties listed above. _Hint_: Don't forget to export the Drone model.
2. In the `seeds/drones.seeds.js` file:
   - Create an array of 3 objects, each with `name`, `propellers` and `maxSpeed` as our initial drones.
   - Establish a connection to the database. You can use the same code in `db/index.js`.
   - Once the database connection is established, call the `Drone` model's `.create()` method with the array as an argument.
   - If the `.create()` method successfully creates the _drones_ collection, output (using _console.log()_) how many drones have been created. In case, the seeding of the database fails, catch the error and output it.
3. Run the seed file with `node` to seed your database.
4. Check if the _drones_ collection is successfully created through the Compass and check the output in the terminal.

_Hint 1_: In case you are struggling with drones' characteristics, you can use this array in your seed file:

```javascript
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];
```

_Hint 2_: Don't forget to close the connection with the database after you have seeded the database. You are familiar with `mongoose.connection.close()` approach, but you can also check the `.disconnect()` Mongoose method. Click [here](https://mongoosejs.com/docs/api.html) to search through Mongoose docs.

<br>

## Iteration #2: List the drones

Now that the drones are in the database, you can start working with them. Let's **display a list of all the drones**.

Here is the route you will be using:

| Route     | HTTP Verb | Description     |
| --------- | --------- | --------------- |
| `/drones` | GET       | Show all drones |

Steps you should follow in this iteration:

1. Find the `/drones` GET route in `routes/drones.js`.
2. Use the Mongoose `.find()` method to retrieve all the drones. Display all the drones on the `drones/list.hbs` view. Make sure you catch the error and output it to the terminal.
3. In the `drones/list.hbs` file, use a `#each` loop to display tags with each drone's `name`, `propellers`, and `speed`.
4. Add the link that goes to `/drones` route in the `layout.hbs` file to easier navigate to the list of drones.

<br>

## Iteration #3: Add a new drone

Now that we have a list of drones, you can focus your attention on **saving new drones to the database**.

Here are the routes you will be using:

| Route            | HTTP Verb | Description                   |
| ---------------- | --------- | ----------------------------- |
| `/drones/create` | GET       | Show a form to create a drone |
| `/drones/create` | POST      | Save a drone to the database  |

Steps you should follow in this iteration:

1. Find the `/drones/create` GET route in `routes/drones.js` and render the `drones/create-form.hbs` view.
2. The `create-form.hbs` should have the form that will submit on `/drones/create` POST route. The form should have all the fields necessary to create a new drone.
3. Locate the `/drones/create` POST route in `routes/drones.js` and using `req.body` get all the info user submitted through the form. Use this info to create a new drone in the database in the _drones_ collection. Make sure you redirect to `/drones` if the new drone is successfully created. If there is an error, render again the view so the user can try again to create a drone.

<br>

## Iteration #4: Update the drone

You can create and list (read) drones, so it is time to proceed to make sure you can **update existing drones**.

Here are the routes you will be using:

| Route              | HTTP Verb | Description                        |
| ------------------ | --------- | ---------------------------------- |
| `/drones/:id/edit` | GET       | Show a form to update a drone      |
| `/drones/:id/edit` | POST      | Save updated drone to the database |

Steps you should follow in this iteration:

1. Under each drone information on the `list.hbs`, add a link to the edit page (pointing to the `/drones/<oneDroneId>/edit`). When clicked, the link should take you to the 404 page (still), but the URL should have a format similar to this one: `/drones/123Hgt5y4500Ux8/edit`.
2. Find the `/drones/:id/edit` GET route in `routes/drones.js` and render the `drones/update-form.hbs` view. Make sure you get the right drone from the database using the available `id` (_hint_: `.findById()`) and pass the drone object to the view.
3. The `update-form.hbs` should have the pre-filled form with the values of the previously passed drone object.
4. Locate the `/drones/:id/edit` POST route in `routes/drones.js` and using `req.body` get all the info user submitted through the form. Use this info to update the existing drone in the database. Make sure you redirect to `/drones` if the new drone is successfully updated. If there is an error, render again the view so the user can try again to update a drone. (_Hint_: You can use `.findByIdAndUpdate()` Mongoose method.)

<br>

## Iteration #5: Delete the drone

You have CRU out of CRUD. It is time to allow users to **remove drones** they don't need anymore.

Here is the route you will be using:

| Route                | HTTP Verb | Description                               |
| -------------------- | --------- | ----------------------------------------- |
| `/drones/:id/delete` | POST      | Delete a specific drone from the database |

Steps you should follow in this iteration:

1. Under each drone information on the `list.hbs`, add a small form with action to `/drones/<oneDroneId>/delete` and method POST. After clicking on the Delete button, this form should submit to the action route.
2. Find the `/drones/:id/delete` POST route in `routes/drones.js` and using `.findByIdAndDelete()` (or `.findByIdAndRemove()`), destroy the document with the given ID from the database.

<br>

## Bonus: Styling

Our app should be pretty ugly right now if you (correctly) focused on the back-end during this exercise. To be a fully functioning web app, we need to add some styles.

In your layout require bootstrap, and add some very basic styles to make our drones app look "ready" for production.

<br>

**Happy coding!**
