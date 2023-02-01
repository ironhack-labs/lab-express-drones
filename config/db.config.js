const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/lab-express-drones'

mongoose
  .connect(MONGO_URI)
  .then(() => console.info(`Succesfully connected to the database ${MONGO_URI}`))
  .catch((err) => console.error(`Error connecting to mongo ${err}`));

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});