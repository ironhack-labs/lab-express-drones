const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/express-drones-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

  process.on('SIGINT', ()=>{
    mongoose.connection.close()
    .then(() => console.log('Mongoose default connection disconnected through app termination'))
    .catch(error => console.log('Error disconnecting from the database', error))
    .finally(() => process.exit());
  })