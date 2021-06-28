// Iteration #1

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: {type: String, required: true},
    propellers: {type: Number},
    maxSpeed: {type: Number, min: 0}
  },
  {
    timestamps: true // this gives a line of code with the exact time the object was created (in the database) and another with the time the object was modified
  }
);

// const Book = model('Book', bookSchema);
// module.exports = Book;

module.exports = model('Drone', droneSchema);
