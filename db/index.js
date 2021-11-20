// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose');

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/drones';

async function mongooseDropCollection() {
  try {
    await mongoose.connection.dropCollection('movies');
    console.log(`Drop DB`);
  } catch (error) {
    console.error('Error connecting to mongo: ', error);
  }
}

async function mongooseConnect() {
  try {
    const { connection } = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`Connected to Mongo! Database name: "${connection.name}"`);
  } catch (error) {
    console.error('Error connecting to mongo: ', error);
  }
}

async function mongooseClose() {
  try {
    await mongoose.connection.close();
    console.log(`Connection close`);
  } catch (error) {
    console.error('Error connecting to mongo: ', error);
  }
}

module.exports = { mongooseConnect, mongooseClose, mongooseDropCollection };

// // ℹ️ package responsible to make the connection with mongodb
// // https://www.npmjs.com/package/mongoose
// const mongoose = require("mongoose");

// // ℹ️ Sets the MongoDB URI for our app to have access to it.
// // If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   })
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });
