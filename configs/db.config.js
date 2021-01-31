const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('DB has been disconected');
      process.exit(0);
    });
  });
